import { Box } from "@mui/material";
import { theme } from "../utils/theme";

const VatDeclaration = () => {
  return (
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
      <h1>VAT Declaration</h1>
    </Box>
  );
};

export { VatDeclaration };
