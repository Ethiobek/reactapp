import { ThemeProvider, Typography } from "@mui/material";
import MasterLayout from "./components/MasterLayout";
import { theme } from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./pages/Users";
import { Post } from "./pages/Post";
import { Home } from "./pages/Home";
// import Dashboard from "./routes/Dashboard";
import ResponsiveDrawer from "./components/RespnsiveLayout";
import { Dashboard } from "./pages/Dashboard";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
        <Router>
          {/* <MasterLayout /> */}
          <ResponsiveDrawer />
          <Routes>
            <Route path="/dashboard/:postId" element={<Post />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
