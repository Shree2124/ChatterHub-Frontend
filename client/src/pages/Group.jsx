import React, { memo, useState } from "react";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { matBlack, orange } from "../constants/colors.js";
import { KeyboardBackspace, Menu } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponent.jsx";
import AvatarCard from "../components/shared/AvatarCard.jsx";
import { sampleChats } from "../constants/SampleData.js";

const GroupItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <>
      <Link
        to={`?group=${_id}`}
        onClick={(e) => {
          if (chatId === _id) e.preventDefault();
          // console.log(chatId);
        }}
      >
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
          <AvatarCard avatar={avatar}></AvatarCard>
          <Typography>{name}</Typography>
        </Stack>
      </Link>
    </>
  );
});

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <>
      <Stack width={w}>
        {myGroups.length > 0 ? (
          myGroups.map((group) => (
            <GroupItem
              key={group._id}
              group={group}
              chatId={chatId}
            ></GroupItem>
          ))
        ) : (
          <Typography
            sx={{
              textAlign: "center",
              padding: "1rem",
            }}
          >
            No Groups
          </Typography>
        )}
      </Stack>
    </>
  );
};

function Group() {

  const chatId = useSearchParams()[0].get("group");
  // console.log(chatId);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const navigateBack = () => {
    console.log("navigate");
    navigate("/");
  };
  const handleMobile = () => {
    console.log("handle mobile");
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const IconButtons = () => {
    return (
      <>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            position: "fixed",
            right: "1rem",
            top: "1rem",
          }}
        >
          <IconButton onClick={handleMobile}>
            <Menu />
          </IconButton>
        </Box>

        <Tooltip title="back">
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              bgcolor: matBlack,
              color: "white",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
            onClick={navigateBack}
          >
            <KeyboardBackspace />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={4}
          bgcolor={orange}
        >
          <GroupsList myGroups={sampleChats} chatId={chatId} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          <IconButtons></IconButtons>
        </Grid>
        <Drawer
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileClose}
        >
          <GroupsList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
        </Drawer>
      </Grid>
    </>
  );
}

export default Group;
