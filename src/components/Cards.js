import { Box, Paper, Typography } from "@mui/material";

const dangerColor = "rgba(180, 0, 0, 0.1)";
const dangerTColor = "rgba(180, 0, 0, 0.6)";

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
        <Typography variant="subtitle1">{props.title}</Typography>
        <Box
          sx={{
            bgcolor: "#0E0A23",
            px: 2,
            py: 1,
            borderRadius: "5px",
            display: "flex",
            height: "40px",
          }}
        >
          <Typography color="white">Monthly</Typography>
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

export { SummaryCard };
