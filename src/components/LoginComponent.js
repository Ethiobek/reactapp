import { Box, Typography } from "@mui/material";

const LoginComponent = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography color="white" variant="h5" fontWeight={"bold"} pb={1}>
        Welcome to Addis Ababa City Gov't
      </Typography>
      <Typography color="gray" fontWeight={"light"} variant={"subtitle1"}>
        A professional kit that comes with ready-to-use MUI components developed
        with one common goal in mind, help you build faster & beautiful
        applications.
      </Typography>
    </Box>
  );
};

export { LoginComponent };
