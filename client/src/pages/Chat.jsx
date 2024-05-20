import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Stack, IconButton } from "@mui/material";
import { grayColor, orange } from "../constants/colors";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent.jsx";
import FileMenu from "../components/dialogs/FileMenu.jsx";
import { sampleMessage } from "../constants/SampleData.js";
import MessageComponent from "../components/shared/MessageComponent.jsx";

const user = {
  _id: "user1",
  name: "abhishek"
}

function Chat() {
  const container = useRef(null);

  return (
    <>
      <Stack
        ref={container}
        boxSizing={"border-box"}
        padding={"0.5rem"}
        spacing={"0.5rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map(i=>(
            <MessageComponent key={i._id} message={i} user={user}/>
          ))
        }
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
          bgcolor={"white"}
        >
          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg"
          }} 
          >
            <AttachFile />
          </IconButton>
          <InputBox placeholder="Type message here...."/>
          <IconButton type="submit" sx={{
            rotate: "-30deg",
            backgroundColor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover":{
              bgcolor: "error.dark"
            }
          }} >
            <Send />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
}

export default AppLayout()(Chat);
