import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";
import { NotFound } from "../components/NotFound";
import { LoadingProgress } from "../components/Loading";
import { Controller, useForm } from "react-hook-form";
import { useGetAllData, usePostData } from "../hooks/useRQData";

import { useEffect } from "react";
import { Feedback } from "../components/Snackbar";
import { theme } from "../utils/theme";

const Dashboard = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllData("post");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const {
    mutate,
    isLoading: postLoading,
    data: dataPost,
    error: errorPost,
    isSuccess,
  } = usePostData("post", data);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      reset({ postContent: "" });
    }
  }, [isSuccess, isLoading]);

  return (
    <Box
      sx={{
        [theme.breakpoints.not("xs")]: {
          ml: "250px",
          mr: 1,
        },
      }}
    >
      <Box>
        <Feedback
          status={isSuccess && !isLoading}
          message={"Posted, check on your feed!"}
          duration={6000}
          type={"success"}
        />
        <Controller
          name="postContent"
          control={control}
          rules={{
            required: "Post content is required",
          }}
          render={({ field }) => (
            <TextField
              margin="normal"
              fullWidth
              size="small"
              label="What's on your mind?"
              helperText={
                errors?.postContent ? errors?.postContent?.message : ""
              }
              error={errors?.postContent}
              {...field}
            />
          )}
        />
        <Button
          color="primary"
          onClick={handleSubmit((data, e) => {
            mutate(data);
          })}
          variant="contained"
          disabled={postLoading}
          sx={{ px: 4 }}
          startIcon={postLoading ? <CircularProgress size={13} /> : null}
        >
          Post
        </Button>
      </Box>
      {isLoading ? <LoadingProgress /> : null}
      {isError ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NotFound errorMessage={error} />
        </Box>
      ) : null}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid container spacing={1}>
          {data?.data.map((post) => {
            return (
              <Grid key={post.id} item xs={16} md={4}>
                <RecipeReviewCard
                  postId={post.id}
                  fullName={post.fullName}
                  avator={post.avator}
                  content={post.postContent}
                  description={post.description}
                  like={post.like}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export { Dashboard };
