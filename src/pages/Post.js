import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useRQData";
import { LoadingProgress } from "../components/Loading";

export const Post = () => {
  const { postId } = useParams();
  const { data, isLoading, isError, error } = useGetData(postId, "post");

  return (
    <Box>
      <Box>
        {isLoading ? <LoadingProgress /> : null}
        {data?.data ? (
          <RecipeReviewCard
            fullName={data?.data?.fullName}
            avator={data?.data?.avator}
            content={data?.data?.postContent}
            description={data?.data?.description}
            like={data?.data?.like}
            width={"240px"}
          />
        ) : null}
      </Box>
    </Box>
  );
};
