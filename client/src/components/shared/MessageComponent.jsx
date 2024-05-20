import { Box, Typography } from "@mui/material";
import { grayColor, lightBlue } from "../../constants/colors.js";
import React from "react";
import moment from "moment";
import RenderAttachment from "./RenderAttachment.jsx";
import { FileFormat } from "../../lib/features.js";

const MessageComponent = ({ message, user }) => {
  const { attachments = [], sender, content, createdAt } = message;
  console.log(attachments);
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} variant="caption" fontWeight={600}>
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {
        attachments.map((i) => {
          console.log(i.public_id);
          console.log(attachments);
          const url = i.url;
          const file = FileFormat(url);
          return (
            <Box>
              <a
                key={i._id}
                href={i.url}
                download
                target="_blank"
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography color="text.secondary" variant="caption">
        {timeAgo}
      </Typography>
    </div>
  );
};

export default MessageComponent;
