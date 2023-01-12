import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  VictoryChart,
  VictoryBar,
  VictoryPie,
  VictoryAxis,
  VictoryLine,
} from "victory";

const BarChart = (props) => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ px: 3, py: 2, borderRadius: "7px", m: 1 }} elevation={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          {t("collectedVat")}
        </Typography>
        <Typography variant="subtitle1">{t("collectedVatSummary")}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained">{t("allCenters")}</Button>
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
  const { t } = useTranslation();
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
          {t("taxPayersSummary")}
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
              { x: t("tot"), y: 400000 },
              { x: t("vat"), y: 800524 },
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
              justifyContent: "space-evenly",
              ml: 3,
            }}
          >
            <Typography variant="subtitle1">{t("type")}</Typography>
            <Typography variant="subtitle1">{t("total")}</Typography>
            <Typography variant="subtitle1">{t("rate")}</Typography>
          </Box>
          <Divider sx={{ my: 1, border: "1px solid white" }} />
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  bgcolor: "#144272",
                  mr: 1,
                }}
              ></Box>
              <Typography variant="caption">{t("vatpayers")}</Typography>
            </Box>
            <Typography variant="caption">800,524</Typography>
            <Typography variant="caption">+12%</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              my: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{ width: "25px", height: "25px", bgcolor: "black", mr: 1 }}
              ></Box>
              <Typography variant="caption">{t("totpayers")}</Typography>
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
