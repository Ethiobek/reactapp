import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { Box, Button, Modal, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
//
axios.defaults.baseURL = "https://localhost:7241/api/";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function PersonView() {
  const [userData, setUserData] = React.useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addUserData(data);
  };

  async function getUserData() {
    try {
      const response = await axios.get("People");
      setUserData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchPosts() {
    const data = await axios.get("People");
    return data?.data;
  }
  const { data, error, isError, isLoading } = useQuery("users", fetchPosts);

  const addUserData = async (data) => {
    await axios.post("People", data);
  };
  const deleteUserData = (id) => {
    return axios.delete(`People/${id}`);
  };
  const getUpdateData = (id, value) => {
    console.log(`hook called with data : ${value} and id : ${id}`);

    axios.patch(`/v1/users/${id}`, {
      status: value === "ACTIVE" ? "pending" : "ACTIVE",
    });
  };
  // const { data, error, isError, isLoading } = useQuery("users", getUserData);
  React.useEffect(() => {
    getUserData();
  }, [data]);
  const columns = [
    { headerName: "Full Name", field: "fullName", width: 150 },
    { headerName: "Gender", field: "gender", width: 150 },
    { headerName: "Doc Number", field: "docNo", width: 150 },
    { headerName: "Phone Number", field: "phoneNumber", width: 150 },
  ];
  console.log("React query :" + data?.data);
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            border: "0.5px solid blue",
            borderRadius: "6px",
            width: "40%",
            display: "flex",
            float: "right",
            justifyContent: "right",
            margin: 2,
            flexDirection: "column",
            p: 2,
          }}
        >
          {errors !== null ? (
            <Box
              sx={{
                color: "red",
              }}
            >
              <ul>
                {errors?.fullName ? <li>{errors.fullName.message}</li> : null}
                {errors?.phoneNumber ? (
                  <li>{errors.phoneNumber.message}</li>
                ) : null}
                {errors?.docNo ? <li>{errors.docNo.message}</li> : null}
                {errors?.gender ? <li>{errors.gender.message}</li> : null}
              </ul>
            </Box>
          ) : null}

          <TextField
            aria-invalid={errors.fullName ? "true" : "false"}
            id="outlined-basic"
            label="Fullname"
            variant="outlined"
            sx={{
              mt: 1,
            }}
            {...register("fullName", {
              required: {
                value: true,
                message: "Please, enter fullname",
              },
              minLength: {
                value: 6,
                message: "Fullname must greater than 6 character",
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Please enter valid name",
              },
            })}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              Male
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Male"
              />
              Female
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="Female"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Please, enter phone number",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must be a number",
              },
              minLength: {
                value: 10,
                message: "Please, enter 10 digit ETH phone number",
              },
              maxLength: {
                value: 10,
                message: "Please, enter 10 digit ETH phone number",
              },
            })}
            sx={{
              mt: 1,
            }}
          />
          <TextField
            id="outlined-basic"
            {...register("docNo", {
              required: {
                value: true,
                message: "Please, enter document number",
              },
            })}
            label="Document number"
            variant="outlined"
            sx={{
              mt: 1,
            }}
          />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            ADD USER
          </Button>
        </Box>
      </form>
      <DataGrid columns={columns} rows={userData} />
    </div>
  );
}
