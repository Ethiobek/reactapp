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
  HistoryToggleOff,
  Logout,
  OtherHouses,
  People,
  PersonAdd,
  Psychology,
  Settings,
  Timelapse,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar, Menu, MenuItem, Paper } from "@mui/material";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box
      sx={{
        bgcolor: "#030911",
        height: "100%",
      }}
    >
      <Box>
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
            <Typography color="gray">{t("viewProfile")}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#030911" }}>
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
          <Link
            to="/users"
            icon={<Group color="inherit" />}
            label={t("users")}
          />
          <Link
            to="/tax-centers"
            icon={<OtherHouses color="inherit" />}
            label={t("tcenter")}
          />
          <Link
            to="/returned-vat"
            icon={<AssignmentReturn color="inherit" />}
            label={t("retvat")}
          />
          <Link
            to="/goods-on-hand"
            icon={<AssistWalker color="inherit" />}
            label={t("goodsonHand")}
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Mr. Bereket Zergaw
        </MenuItem>

        <Divider />
        <MenuItem>
          <ListItemIcon>
            <HistoryToggleOff fontSize="small" />
          </ListItemIcon>
          {t("activity")}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("setting")}
        </MenuItem>
        <MenuItem component={NavLink} to={"/"}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t("logout")}
        </MenuItem>
      </Menu>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", width: "90%" }}>
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
            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              sx={{ ml: 1 }}
            >
              {t("app_title")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "10%",
              justifyContent: "right",
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
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
              bgcolor: "#030911",
            },
          }}
        >
          {drawer}
          <Divider />
          <Paper
            sx={{
              margin: "auto",
              position: "relative",
              bottom: 0,
              bgcolor: "#030911",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography color={"white"} variant="caption">
              {t("poweredBy")}
            </Typography>
            <Typography color={"white"} variant="caption">
              {t("cp-right")} &copy; 2023
            </Typography>
          </Paper>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#030911",
            },
          }}
          open
        >
          {drawer}
          <Divider />

          <Paper
            sx={{
              margin: "auto",
              position: "relative",
              bottom: 0,
              bgcolor: "#030911",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography color={"white"} variant="caption">
              {t("poweredBy")}
            </Typography>
            <Typography color={"white"} variant="caption">
              {t("cp-right")} &copy; 2023
            </Typography>
          </Paper>
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
