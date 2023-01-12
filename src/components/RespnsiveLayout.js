import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  AddCard,
  AssignmentReturn,
  AssistWalker,
  BarChart,
  Campaign,
  Dashboard,
  Group,
  Groups,
  OtherHouses,
  Psychology,
  Settings,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const Link = ({ to, icon, label }) => (
  <ListItem
    component={NavLink}
    to={to}
    style={({ isActive }) =>
      isActive
        ? { color: "white", backgroundColor: "#0A2647", fontWeight: "bold" }
        : { color: "white", fontWeight: "bold" }
    }
  >
    <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
    <ListItemText sx={{ color: "inherit" }} primary={label} />
  </ListItem>
);

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#030911",
      }}
    >
      <Box sx={{ height: "10%", pb: 1 }}>
        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            p: 3,
          }}
        >
          <Box sx={{ mr: 1, p: 1 }}>
            <Avatar />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Typography>Bereket Zergaw</Typography>
            <Typography color="gray">View Profie</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "85%" }}>
        <List>
          <Divider sx={{ width: "100%" }} />
          <Link
            to="/dashboard"
            icon={<Dashboard color="inherit" />}
            label={t("dashboard")}
          />

          <Link
            to="/tax-payers"
            icon={<Groups color="inherit" />}
            label={t("taxpayers")}
          />
          <Link
            to="/pay-instruction"
            icon={<AddCard color="inherit" />}
            label={t("payIns")}
          />
          <Link
            to="/vat-declaration"
            icon={<Campaign color="inherit" />}
            label={t("vatdec")}
          />
          <Link to="/users" icon={<Group color="inherit" />} label="Users" />
          <Link
            to="/tax-centers"
            icon={<OtherHouses color="inherit" />}
            label={t("users")}
          />
          <Link
            to="/returned-vat"
            icon={<AssignmentReturn color="inherit" />}
            label={t("tcenter")}
          />
          <Link
            to="/goods-on-hand"
            icon={<AssistWalker color="inherit" />}
            label={t("retvat")}
          />
          <Link
            to="/control-panel"
            icon={<Settings color="inherit" />}
            label={t("cpanel")}
          />
          <Link
            to="/reports"
            icon={<BarChart color="inherit" />}
            label={t("report")}
          />
          <Link
            to="/activity-log"
            icon={<Psychology color="inherit" />}
            label={t("actlog")}
            f
          />
        </List>
      </Box>
      <Box sx={{ height: "5%" }}>
        <Box
          sx={{
            height: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Divider sx={{ border: "1px solid gray", width: "100%", mb: 1 }} />
          <Typography color="gray">
            Powered By Rohoboth Solution Tech
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} width="40px" alt="logo" />
          <Typography variant="subtitle1" noWrap component="div" sx={{ ml: 1 }}>
            {t("app_title")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "#05396B",
              bgcolor: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
