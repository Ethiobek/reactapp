import {
  Box,
  Button,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Login = () => {
  const { t } = useTranslation();
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
          {t("welcome")}
        </Typography>

        <Paper
          sx={{
            mt: 1,
            p: 3,
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle" sx={{ py: 1 }}>
            {t("loginTitle")}
          </Typography>
          <TextField
            sx={{ borderRadius: "7px", mb: 2, mt: 3 }}
            variant="outlined"
            label={t("username")}
            size="small"
            fullWidth
          />
          <TextField
            sx={{ borderRadius: "7px" }}
            variant="outlined"
            label={t("password")}
            size="small"
            fullWidth
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              py: 1,
            }}
          >
            <Button component={NavLink} variant="outlined" to="/dashboard">
              {t("login")}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export { Login };
