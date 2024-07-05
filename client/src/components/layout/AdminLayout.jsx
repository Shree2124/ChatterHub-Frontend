import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  Chat,
  Close,
  ExitToApp,
  Group,
  ManageAccounts,
  Menu,
  Message,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
import { grayColor, matBlack } from "../../constants/colors.js";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 1rem;
  display: flex;
  text-align: center;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Dashboard />,
  },
  {
    name: "User",
    path: "/admin/users",
    icon: <ManageAccounts />,
  },
  {
    name: "Groups",
    path: "/admin/groups",
    icon: <Group />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <Message />,
  },
];

const SideBar = ({ w = "100%", bgcolor = "", h = "" }) => {
  const isAdmin = true;
  const location = useLocation();
  const logoutHandler = () => {
    console.log("Logout");
  };
  if (!isAdmin) return <Navigate to="/admin" />;
  return (
    <>
      <Stack
        width={w}
        bgcolor={bgcolor}
        position={"fixed"}
        height={h}
        direction={"column"}
        p={"3rem"}
        spacing={"3rem"}
      >
        <Typography variant="h5" textTransform={"uppercase"}>
          Admin
        </Typography>
        <Stack
          spacing={"1rem"}
          marginLeft={"2rem"}
          justifyContent={"center"}
          alignItems={"baseline"}
        >
          {adminTabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              sx={
                location.pathname === tab.path && {
                  bgcolor: matBlack,
                  color: "white",
                  ":hover": { color: "whitesmoke" },
                }
              }
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {tab.icon}
                <Typography>{tab.name}</Typography>
              </Stack>
            </Link>
          ))}
          <Link onClick={logoutHandler}>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              <ExitToApp />
              <Typography>Logout</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const handleClose = () => {
    setIsMobile(false);
  };
  return (
    <div>
      <Grid
        sx={{
          bgcolor: { sx: "#f5f5f5", md: "" },
        }}
        container
        minHeight={"100vh"}
      >
        <Box
          sx={{
            display: { sx: "block", md: "none" },
            position: "fixed",
            right: "0.5rem",
            top: "0.5rem",
            zIndex: 10
          }}
        >
          <IconButton onClick={handleMobile}>
            {isMobile ? <Close /> : <Menu />}
          </IconButton>
        </Box>

        <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          marginTop={{ sx: "1rem", md: "0" }}
          sx={{
            bgcolor: "#f5f5f5 !important",
          }}
        >
          {children}
        </Grid>
        <Drawer open={isMobile} onClose={handleClose}>
          <SideBar w="50vw" bgcolor="#f5f5f5" h="100%" />
        </Drawer>
      </Grid>
    </div>
  );
};

export default AdminLayout;
