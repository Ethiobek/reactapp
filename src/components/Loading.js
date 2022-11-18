import { Box, CircularProgress } from "@mui/material";

const LoadingProgress = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={15} />
    </Box>
  );
};

export { LoadingProgress };
