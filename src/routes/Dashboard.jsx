import { Box, Grid, Paper } from "@mui/material";
import { BankSummary, SummaryCard } from "../components/Cards";
import { BarChart, LineChart, PieChart } from "../components/Charts";
import ResponsiveDrawer from "../components/RespnsiveLayout";
import { theme } from "../utils/theme";
import Carousel from "react-material-ui-carousel";
import {
  hibretBankColor,
  cbeColor,
  abyssiniaBankColor,
  dashenBankColor,
} from "../utils/colors";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const sampleData = [
    { x: t("Jan"), y: 8356 },
    { x: t("Feb"), y: 1235 },
    { x: t("Mar"), y: 2235 },
    { x: t("Apr"), y: 4135 },
    { x: t("May"), y: 6235 },
    { x: t("Jun"), y: 1356 },
    { x: t("Jul"), y: 1235 },
    { x: t("Aug"), y: 5155 },
    { x: t("Sep"), y: 4235 },
    { x: t("Oct"), y: 3123 },
    { x: t("Nov"), y: 6635 },
    { x: t("Dec"), y: 6235 },
  ];
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
              title={t("collectedVat")}
              amount={`32,916,217 ${t("etb")}`}
              rate="12"
              rateStatus="danger"
              freq={t("monthly")}
              currency={t("etb")}
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title={t("collectedTot")}
              amount={`2,415,522 ${t("etb")}`}
              rate="15"
              rateStatus="success"
              freq={t("monthly")}
              currency={t("etb")}
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title={t("payInsTotal")}
              amount="741"
              rate="16"
              rateStatus="success"
              freq={t("monthly")}
              currency={t("etb")}
            />
          </Grid>
          <Grid xs={12} md={6} sm={6} xl={3} lg={3}>
            <SummaryCard
              title={t("declarationTotal")}
              amount="451"
              rate="10"
              rateStatus="danger"
              freq={t("monthly")}
              currency={t("etb")}
            />
          </Grid>
          <Grid xs={12} md={8} sm={12} xl={8} lg={8}>
            <BarChart data={sampleData} />
          </Grid>

          <Grid xs={12} md={4} sm={12} xl={4} lg={4}>
            <PieChart data={sampleData} detailed />
            <Carousel animation="slide">
              <BankSummary
                bankName={"Commercial Bank of Ethiopia"}
                accNumber={"1000185251113"}
                beneficieryName={"Bole K/Ketema"}
                collectedAmount={"14,526"}
                notRecieved={"6,512"}
                bgColor={cbeColor}
              />
              <BankSummary
                bankName={"Hibret Bank"}
                accNumber={"1000185251113"}
                beneficieryName={"Lideta K/Ketema"}
                collectedAmount={"4,654"}
                notRecieved={"985"}
                bgColor={hibretBankColor}
              />
              <BankSummary
                bankName={"Dashen Bank"}
                accNumber={"1000185251113"}
                beneficieryName={"Kolfe K/Ketema"}
                collectedAmount={"51,212"}
                notRecieved={"512"}
                bgColor={dashenBankColor}
              />
              <BankSummary
                bankName={"Abyssinia Bank"}
                accNumber={"1000185251113"}
                beneficieryName={"Akaki K/Ketema"}
                collectedAmount={"9,417"}
                notRecieved={"568"}
                bgColor={abyssiniaBankColor}
              />
            </Carousel>
            {/*Bank   */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
// export { Dashboard };
