import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

// Fetch all data from backend
// 1st param : endpoint
const useGetAllData = (endpoint) => {
  const fetch = () => {
    return axios.get(
      `https://6273f57c3d2b510074256ac3.mockapi.io/blog/${endpoint}`
    );
  };
  var qryKey = endpoint + "_data";
  return useQuery(qryKey, fetch);
};

// Fetch single data only by passing
// Call the useGetData custom query to fetch single data/detail of single data
// 1st param : id
// 2nd param : endPoint
const useGetData = (id, endPoint) => {
  const fetch = ({ queryKey }) => {
    const id = queryKey[1];
    const endPoint = queryKey[0];
    return axios.get(
      `https://6273f57c3d2b510074256ac3.mockapi.io/blog/${endPoint}/${id}`
    );
  };
  return useQuery([endPoint, id], fetch);
};

// Post data to the backend
// Call the usePostData custom query with 2 parametrs
// 1st param : endpoint
// 2nd param : data
const usePostData = (endPoint) => {
  const queryClient = useQueryClient();
  return useMutation(
    (data) => {
      console.log("Data : " + data);
      return axios.post(
        `https://6273f57c3d2b510074256ac3.mockapi.io/blog/${endPoint}`,
        data
      );
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(endPoint + "_data", (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [...oldQueryData.data, data.data],
          };
        });
      },
    }
  );
};
// Edit data
// Call the useChangeStatus custom query with 2 parametrs
// 1st param : endpoint
// 2nd param : data
const useChangeStatus = (endpoint) => {
  return useMutation(({ id, status }) => {
    return axios.put(
      `https://6273f57c3d2b510074256ac3.mockapi.io/blog/${endpoint}/${id}`,
      {
        status,
      }
    );
  });
};

export { useGetAllData, useGetData, usePostData, useChangeStatus };
