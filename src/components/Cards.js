import {
  CurrencyBitcoin,
  DoneAll,
  DoneAllRounded,
  RotateLeft,
  Toll,
  TranscribeSharp,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { darkTheme, theme } from "../utils/theme";

const dangerColor = "rgba(180, 0, 0, 0.1)";
const dangerTColor = "rgba(255, 0, 0, 0.8)";

const successColor = "rgba(0, 200, 0, 0.2)";
const successTColor = "rgba(0, 200, 0, 1)";

const SummaryCard = (props) => {
  return (
    <Paper
      sx={{
        m: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        justifyContent: "space-around",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">{props.title}</Typography>
        <Box
          sx={{
            bgcolor: "#0E0A23",
            px: 2,
            borderRadius: "5px",

            maxHeight: "30px",
          }}
        >
          <Typography color="white" variant="caption">
            {props.freq}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} color="gray">
          {props.amount}{" "}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          variant={"caption"}
          sx={{
            px: 2,
            borderRadius: "4px",
            py: 1,
            bgcolor: props.rateStatus == "success" ? successColor : dangerColor,
            color: props.rateStatus == "success" ? successTColor : dangerTColor,
          }}
          fontWeight={"bold"}
        >
          {props.rateStatus == "success"
            ? `+${props.rate}%`
            : `-${props.rate}%`}
        </Typography>
      </Box>
    </Paper>
  );
};

const BankSummary = (props) => {
  const { t } = useTranslation();
  return (
    <Paper
      theme={darkTheme}
      sx={{ mx: 1, my: 1, bgcolor: props.bgColor }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          py: 3,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Toll sx={{ mr: 1, color: "yellow" }} />
          <Typography>{props.bankName}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
        <Typography letterSpacing={2}>{props.accNumber}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
        <Typography variant="subtitle1">{props.beneficieryName}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            mr: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mr: 1, color: "green" }}>
              <DoneAll />
            </Box>
            <Box>{props.collectedAmount}</Box>
          </Box>
          <Typography variant="subtitle">{t("collectedMoney")}</Typography>
        </Box>
        <Box
          sx={{
            py: 3,
            display: "flex",
            mr: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mr: 1, color: "yellow" }}>
              <RotateLeft />
            </Box>
            <Box>{props.notRecieved}</Box>
          </Box>
          <Typography variant="subtitle">{t("notRecievedYet")}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export { SummaryCard, BankSummary };
