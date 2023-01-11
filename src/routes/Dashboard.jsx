import { Box, Grid } from "@mui/material";
import { SummaryCard } from "../components/Cards";
import { BarChart, LineChart, PieChart } from "../components/Charts";
import ResponsiveDrawer from "../components/RespnsiveLayout";
import { theme } from "../utils/theme";

const sampleData = [
  { x: "Jan", y: 8356 },
  { x: "Feb", y: 1235 },
  { x: "Mar", y: 2235 },
  { x: "Apr", y: 4135 },
  { x: "May", y: 6235 },
  { x: "Jun", y: 1356 },
  { x: "Jul", y: 1235 },
  { x: "Aug", y: 5155 },
  { x: "Sep", y: 4235 },
  { x: "Oct", y: 3123 },
  { x: "Nov", y: 6635 },
  { x: "Dec", y: 6235 },
];

const sampleData2 = [
  { x: "Jan", y: 1502 },
  { x: "Feb", y: 1235 },
  { x: "Mar", y: 125 },
  { x: "Apr", y: 4135 },
  { x: "May", y: 6235 },
  { x: "Jun", y: 1356 },
  { x: "Jul", y: 1235 },
  { x: "Aug", y: 5155 },
  { x: "Sep", y: 4235 },
  { x: "Oct", y: 3123 },
  { x: "Nov", y: 6635 },
  { x: "Dec", y: 6235 },
];

const Dashboard = () => {
  return (
    <>
      <ResponsiveDrawer />
      <Box
        sx={{
          [theme.breakpoints.not("xs")]: {
            ml: "270px",
            mr: 1,
            mt: 4,
          },
          m: 2,
          ml: 3,
        }}
      >
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title="Collected VAT"
              amount="32,916,217 ETB"
              rate="12"
              rateStatus="danger"
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title="Collected TOT"
              amount="2,415,522 ETB"
              rate="15"
              rateStatus="success"
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title="Payment Instructions"
              amount="741"
              rate="16"
              rateStatus="success"
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title="Declaration Docs"
              amount="451"
              rate="10"
              rateStatus="danger"
            />
          </Grid>
          <Grid xs={12} md={8} sm={12} xl={8} lg={8}>
            <BarChart data={sampleData} />
          </Grid>

          <Grid xs={12} md={4} sm={12} xl={4} lg={4}>
            <PieChart data={sampleData} detailed />
            <LineChart data={sampleData} />
            {/*Bank   */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
// export { Dashboard };
