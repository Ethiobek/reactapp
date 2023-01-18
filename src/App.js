import { Box, Fab, ThemeProvider, Typography } from "@mui/material";
import { darkTheme, theme } from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import { ActivityLog } from "./routes/ActivityLog";
import { TaxPayers } from "./routes/Taxpayers";
import { PaymentInstruction } from "./routes/PaymentInstruction";
import { VatDeclaration } from "./routes/VatDeclaration";
import { Users } from "./pages/Users";
import { TaxCenters } from "./routes/TaxCenters";
import { ReturnedVat } from "./routes/ReturnedVat";
import { GoodsOnHand } from "./routes/GoodsOnHand";
import { ControlPanel } from "./routes/ControlPanel";
import { Report } from "./routes/Report";
import { Login } from "./routes/Login";
import {
  DarkMode,
  Language,
  LanguageTwoTone,
  LightMode,
  LightModeOutlined,
  LightModeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  const [dmode, setDmode] = useState(localStorage.getItem("mode") || "light");
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  const queryClient = new QueryClient();
  const darkMode = () => {
    setDmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const changeLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "am" : "en"));
  };

  useEffect(() => {
    // setDmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem("mode", dmode);
  }, [dmode, setDmode]);

  useEffect(() => {
    localStorage.setItem("i18nextLng", lang);
    i18next.changeLanguage(lang);
  }, [lang, setLang]);
  const { t } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={dmode == "dark" ? darkTheme : theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activity-log" element={<ActivityLog />} />
            <Route path="/tax-payers" element={<TaxPayers />} />
            <Route path="/pay-instruction" element={<PaymentInstruction />} />
            <Route path="/vat-declaration" element={<VatDeclaration />} />
            <Route path="/users" element={<Users />} />
            <Route path="/tax-centers" element={<TaxCenters />} />
            <Route path="/returned-vat" element={<ReturnedVat />} />
            <Route path="/goods-on-hand" element={<GoodsOnHand />} />
            <Route path="/control-panel" element={<ControlPanel />} />
            <Route path="/reports" element={<Report />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Fab
        size="medium"
        aria-label="add"
        sx={{
          position: "absolute",
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 90,
          left: "auto",
          position: "fixed",
        }}
        onClick={darkMode}
      >
        {dmode === "light" ? <DarkMode /> : <LightMode />}
      </Fab>
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        sx={{
          position: "absolute",
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 35,
          left: "auto",
          position: "fixed",
        }}
        onClick={changeLanguage}
      >
        {lang === "en" ? (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            አማ
            <Language />
          </Box>
        ) : (
          <Box>
            En
            <Language />
          </Box>
        )}
      </Fab>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
