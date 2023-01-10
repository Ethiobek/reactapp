import { Fab, ThemeProvider, Typography } from "@mui/material";
import { darkTheme, theme } from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import { ActivityLog } from "./routes/ActivityLog";
import { TaxPayers } from "./routes/Taxpayers";
import { PaymentInstruction } from "./routes/PaymentInstruction";
import { VatDeclaration } from "./routes/VatDeclaration";
import { Users } from "./routes/Users";
import { TaxCenters } from "./routes/TaxCenters";
import { ReturnedVat } from "./routes/ReturnedVat";
import { GoodsOnHand } from "./routes/GoodsOnHand";
import { ControlPanel } from "./routes/ControlPanel";
import { Report } from "./routes/Report";
import { Login } from "./routes/Login";
import {
  DarkMode,
  LightMode,
  LightModeOutlined,
  LightModeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
function App() {
  const [dmode, setDmode] = useState(localStorage.getItem("mode") || "light");
  const queryClient = new QueryClient();
  const darkMode = () => {
    setDmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // setDmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem("mode", dmode);
  }, [dmode, setDmode]);
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
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        {dmode === "light" ? (
          <DarkMode onClick={darkMode} />
        ) : (
          <LightMode onClick={darkMode} />
        )}
      </Fab>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
