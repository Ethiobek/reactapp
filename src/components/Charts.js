import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import {
  VictoryChart,
  VictoryBar,
  VictoryPie,
  VictoryAxis,
  VictoryTheme,
} from "victory";

const BarChart = (props) => {
  return (
    <Paper sx={{ px: 3, py: 2, borderRadius: "7px", m: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" fontWeight={"bold"}>
          Collected VAT
        </Typography>
        <Typography variant="subtitle1">
          A chart that describes the relation between collected VAT with in each
          month
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
        <Button variant="outlined">All Centers</Button>
      </Box>
      <VictoryChart domainPadding={15}>
        <VictoryBar
          data={props.data}
          style={{
            data: {
              fill: "#0A2647",
              fontSize: "10px",
              stroke: "white",
              strokeWidth: "0.5px",
            },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: {
              fill: "green",
              fontSize: "12px",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {
              fill: "green",
              fontSize: "12px",
            },
          }}
        />
      </VictoryChart>
    </Paper>
  );
};

const PieChart = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "#030911",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
      }}
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
        <Typography sx={{ p: 1 }} variant="h6" color="white">
          Tax Payers Summary
        </Typography>
        <svg
          width={250}
          height={250}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <VictoryPie
            standalone={false}
            domainPadding={25}
            width={250}
            height={250}
            style={{
              labels: { fill: "white", fontSize: 20, fontWeight: "bold" },
            }}
            data={[
              { x: "TOT", y: 400000 },
              { x: "VAT ", y: 800524 },
            ]}
            colorScale={["white", "#144272"]}
          />
        </svg>
      </Box>
      {props.detailed ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mx: 2,
              ml: 2,
            }}
          >
            <Typography variant="h6" color="white">
              Type
            </Typography>
            <Typography variant="h6" color="white">
              Total
            </Typography>
            <Typography variant="h6" color="white">
              Rate/Month
            </Typography>
          </Box>
          <Divider sx={{ my: 2, border: "1px solid white" }} />
          <Box sx={{ display: "flex", justifyContent: "space-around", mx: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  bgcolor: "#144272",
                  mr: 1,
                }}
              ></Box>
              <Typography color="white">VAT Payers</Typography>
            </Box>
            <Typography color="white">800,524</Typography>
            <Typography color="white">+12%</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mx: 2,
              my: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{ width: "25px", height: "25px", bgcolor: "white", mr: 1 }}
              ></Box>
              <Typography color="white">TOT Payers</Typography>
            </Box>
            <Typography color="white">400,000</Typography>
            <Typography color="white">-10%</Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export { BarChart, PieChart };
