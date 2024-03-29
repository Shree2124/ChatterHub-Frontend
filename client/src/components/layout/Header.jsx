import { lazy } from "react";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, Add, Group, Logout, Notifications } from "@mui/icons-material";
import { orange } from "../../constants/colors.js";
import { useNavigate } from "react-router-dom";
import React, { Suspense, useState } from "react";




const SearchDialog = lazy(()=>import("../specific/Search.jsx"));
const Notification = lazy(()=>import("../specific/Notification.jsx"));
const NewGroups = lazy(()=>import("../specific/NewGroups.jsx"));


const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isGroup, setIsGroup] = useState(false)
  const [isNotification, setIsNotification] = useState(false)

  const handleMobile = () => {
    setIsMobile((prev)=>!prev)
  };
  const handleSearch = () => {
    setIsSearch((prev)=>!prev)
  };
  const handleAdd = () => {
    setIsGroup((prev)=>!prev)
  };
  const handleLogout = () => {};
  const hadleNotification = () => {
    setIsNotification((prev)=>!prev)
  };
  const navigateToGroup = () => navigate("/groups");

  return (
    <>
    <Box sx={{ flexGrow: 1 }} height="4rem">
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
          flexDirection: "row",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            ChatterHub
          </Typography>
        </Toolbar>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <IconButton color="inherit" onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconBtn title={"Search"} icon={<SearchIcon />} onClick={handleSearch} />
          <IconBtn title={"New Group"} icon={<Add />} onClick={handleAdd} />
          <IconBtn
            title="Manage groups"
            icon={<Group />}
            onClick={navigateToGroup}
          />
            <IconBtn
              title="Notification"
              icon={<Notifications />}
              onClick={hadleNotification}
            />
          <IconBtn
            title="Logout"
            icon={<Logout />}
            onClick={handleLogout}
          />
        </Box>
      </AppBar>
    </Box>
    {
      isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog/> 
        </Suspense>
      )
    }
    {
      isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <Notification/> 
        </Suspense>
      )
    }
    {
      isGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroups/> 
        </Suspense>
      )
    }
    </>
  );
}

export default Header;
