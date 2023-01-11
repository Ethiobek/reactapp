import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import {
  VictoryChart,
  VictoryBar,
  VictoryPie,
  VictoryAxis,
  VictoryLine,
} from "victory";

const BarChart = (props) => {
  return (
    <Paper sx={{ px: 3, py: 2, borderRadius: "7px", m: 1 }} elevation={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Collected VAT
        </Typography>
        <Typography variant="subtitle1">
          A chart that describes the relation between collected VAT with in each
          month
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained">All Centers</Button>
      </Box>
      <Box>
        <VictoryChart
          domainPadding={{ x: 15, y: 50 }}
          padding={{ top: 10, bottom: 20, right: 5, left: 35 }}
        >
          <VictoryBar
            data={props.data}
            style={{
              data: {
                fill: "#2C74B3",
                fontSize: 10,
                stroke: "white",
                strokeWidth: 0.1,
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryAxis
            style={{
              tickLabels: {
                fill: "#2C74B3",
                fontSize: 7,
                fontWeight: "bold",
              },
              axis: { stroke: "#2C74B3" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: {
                fill: "#2C74B3",
                fontSize: 7,
                fontWeight: "bold",
              },
              axis: { stroke: "#2C74B3" },
            }}
          />
        </VictoryChart>
      </Box>
    </Paper>
  );
};

const PieChart = (props) => {
  return (
    <Paper
      sx={{
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        m: 1,
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ p: 1 }} variant="h6">
          Tax Payers Summary
        </Typography>
        <svg
          width={210}
          height={210}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <VictoryPie
            standalone={false}
            domainPadding={25}
            width={210}
            height={210}
            style={{
              labels: { fill: "#2C74B3", fontSize: 15 },
            }}
            data={[
              { x: "TOT", y: 400000 },
              { x: "VAT ", y: 800524 },
            ]}
            colorScale={["black", "#144272"]}
          />
        </svg>
      </Box>
      {props.detailed ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              ml: 2,
            }}
          >
            <Typography variant="subtitle1">Type</Typography>
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="subtitle1">Rate/Month</Typography>
          </Box>
          <Divider sx={{ my: 1, border: "1px solid white" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  bgcolor: "#144272",
                  mr: 1,
                }}
              ></Box>
              <Typography variant="caption">VAT Payers</Typography>
            </Box>
            <Typography variant="caption">800,524</Typography>
            <Typography variant="caption">+12%</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              my: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{ width: "25px", height: "25px", bgcolor: "black", mr: 1 }}
              ></Box>
              <Typography variant="caption">TOT Payers</Typography>
            </Box>
            <Typography variant="caption">400,000</Typography>
            <Typography variant="caption">-10%</Typography>
          </Box>
        </Box>
      ) : null}
    </Paper>
  );
};

const LineChart = (props) => {
  return (
    <Paper
      sx={{
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        m: 1,
        p: 1,
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ p: 1 }} variant="h6">
          Payment History Graph
        </Typography>

        <VictoryChart
          domainPadding={{ x: 15, y: 50 }}
          padding={{ top: 15, bottom: 30, right: 30, left: 60 }}
        >
          <VictoryLine
            interpolation="natural"
            data={props.data}
            style={{ data: { stroke: "#2C74B3" } }}
          />
          <VictoryAxis
            style={{
              tickLabels: {
                fill: "#2C74B3",
              },
              axis: { stroke: "#2C74B3" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: {
                fill: "#2C74B3",
              },
              axis: { stroke: "#2C74B3" },
            }}
          />
        </VictoryChart>
      </Box>
    </Paper>
  );
};

export { BarChart, PieChart, LineChart };
