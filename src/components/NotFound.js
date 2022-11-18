import { Box, Typography } from "@mui/material";
import React from "react";

export const NotFound = (props) => {
  return (
    <Box
      sx={{
        borderRadius: "6px",
        p: 5,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography color={"GrayText"} fontSize={"25px"}>
        404
      </Typography>
      <Typography color={"GrayText"}>Page Not Found!</Typography>
      <Typography color={"red"} fontSize={"6px"}>
        {props.errorMessage}
      </Typography>
    </Box>
  );
};
