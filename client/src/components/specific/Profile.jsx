import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { Face, AlternateEmail, CalendarMonth} from "@mui/icons-material"
import moment from "moment"

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}
      >
        {Icon && Icon}
        <Stack>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="caption" color={"gray"}>{heading}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            height: 200,
            width: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        />
        <ProfileCard heading={"Bio"} text={"skljd dljfls sd"} />
        <ProfileCard heading={"Username"} text={"skljd dljfls sd"} Icon={<AlternateEmail/>}/>
        <ProfileCard heading={"Name"} text={moment("2023-11-04T18:30:00.000Z").fromNow()} Icon={<Face/>} />
        <ProfileCard heading={"Joined"} text={"skljd dljfls sd"} Icon={<CalendarMonth/>} />
      </Stack>
    </>
  );
};

export default Profile;
