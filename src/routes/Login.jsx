import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(104,168,255)",
        background:
          "linear-gradient(19deg, rgba(104,168,255,1) 0%, rgba(39,74,163,1) 100%)",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: 1,
        }}
      >
        <img src={logo} alt="Logo" width={"20%"} />
        <Typography variant="h5" color="white">
          LOGIN
        </Typography>
        <Typography variant="subtitle1" color="#FFF9FA">
          Please enter your username and password
        </Typography>
        <Box
          sx={{
            p: 3,
            background: "white",
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            sx={{ borderRadius: "7px", mb: 2, mt: 3 }}
            variant="outlined"
            label="Username"
            size="small"
            fullWidth
          />
          <TextField
            sx={{ backgroundColor: "whitesmoke", borderRadius: "7px" }}
            variant="outlined"
            label="Password"
            size="small"
            fullWidth
          />
          <Typography variant="subtitle" sx={{ py: 1 }}>
            By login you agree our Terms & Condition
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              py: 1,
            }}
          >
            <Button component={NavLink} variant="outlined" to="/dashboard">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Login };
