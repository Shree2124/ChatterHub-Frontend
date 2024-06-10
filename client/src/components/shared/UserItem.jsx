import React, { memo } from "react";
import { ListItem, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Add as AddIcon, Remove } from "@mui/icons-material";

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false, styling={} }) => {
  const { name, _id, avatar } = user;
  return (
    <div>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
          {...styling}
        >
          <Avatar />
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
            {name}
          </Typography>
          <IconButton
            sx={{
              bgcolor: isAdded ? "error.main" : "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: isAdded ? "error.dark" : "primary.dark",
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded ? <Remove /> : <AddIcon />}
          </IconButton>
        </Stack>
      </ListItem>
    </div>
  );
};

export default memo(UserItem);
