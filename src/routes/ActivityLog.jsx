import { Box } from "@mui/material";
import ResponsiveDrawer from "../components/RespnsiveLayout";
import { theme } from "../utils/theme";

const ActivityLog = () => {
  return (
    <>
      <ResponsiveDrawer />

      <Box
        sx={{
          [theme.breakpoints.not("xs")]: {
            ml: "250px",
            mr: 1,
          },
          ml: 1,
          mr: 1,
        }}
      >
        <h1>Activity Log</h1>
      </Box>
    </>
  );
};

export { ActivityLog };
