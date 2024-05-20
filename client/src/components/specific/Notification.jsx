import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

import { sampleNotifications } from "../../constants/SampleData";

const Notification = () => {
  const friendRequestHandler = ({ _id, accept }) => {};
  return (
    <Dialog open>
      <Stack p={{ sx: "1rem", sm: "2rem" }} minWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          <>
            {sampleNotifications.map((notify) => (
              <NotificationItem
                key={notify._id}
                sender={notify.sender}
                _id={notify._id}
                handler={friendRequestHandler}
              />
            ))}
          </>
        ) : (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <>
      <div>
        <ListItem>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            width={"100%"}
          >
            <Avatar src={avatar}/>
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {`${name} send you a friend request.`}
            </Typography>
            <Stack 
              direction={{
                xs: "column",
                sm: "row"
              }}
            >
              <Button onClick={() => handler({ _id, accept: true })}>
                Accept
              </Button>
              <Button onClick={() => handler({ _id, accept: false })} color="error">
                Reject
              </Button>
            </Stack>
          </Stack>
        </ListItem>
      </div>
    </>
  );
});

export default Notification;
