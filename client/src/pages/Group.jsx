import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { bgGradient, matBlack, orange } from "../constants/colors.js";
import {
  KeyboardBackspace,
  Menu,
  Edit,
  Done,
  Delete,
  Add,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponent.jsx";
import AvatarCard from "../components/shared/AvatarCard.jsx";
import { sampleChats, sampleUser } from "../constants/SampleData.js";
import UserItem from "../components/shared/UserItem.jsx";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog.jsx")
);
const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog.jsx")
);

const isAddMember = false;

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
      <Stack width={w} 
        sx={{
          backgroundImage: bgGradient,
          height:"100%"
        }}
      >
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
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

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

  const updateGroupName = () => {
    setIsEdit(false);
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {};

  const deleteHandler = () => {
    console.log("Delete handler");
    closeConfirmDeleteHandler();
  };

  const removeMemberHandler = () => {};

  useEffect(() => {
    if(chatId){
      setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

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
              top: "1rem",
              left: "1rem",
              bgcolor: matBlack,
              color: "white",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
              height: "30px",
              width: "30px",
            }}
            onClick={navigateBack}
          >
            <KeyboardBackspace />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={() => setIsEdit(false)}>
            <Done></Done>
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <Edit></Edit>
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "row-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
      style={{
        marginTop: "1rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<Delete />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<Add />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

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
            backgroundImage: bgGradient,
            color: "white"
          }}
          sm={4}
        >
          <GroupsList myGroups={sampleChats} chatId={chatId} />
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            padding: "1rem 2rem",
          }}
        >
          <IconButtons></IconButtons>
          {groupName && (
            <>
              {GroupName}
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                height={"50vh"}
                overflow={"auto"}
              >
                {/* GroupMembers */}
                {sampleUser.map((i) => (
                  <UserItem
                  key={i._id}
                    user={i}
                    isAdded
                    styling={{
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                      padding: "1rem",
                      borderRadius: "1rem",
                      width: "100%"
                    }}
                    handler={removeMemberHandler}
                  />
                ))}
              </Stack>
              {ButtonGroup}
            </>
          )}
        </Grid>
        {isAddMember && (
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog />
          </Suspense>
        )}

        {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog
              open={confirmDeleteDialog}
              handleClose={closeConfirmDeleteHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        )}

        <Drawer
          sx={{
            display: {
              xs: "block",
              sm: "none",
            }
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
