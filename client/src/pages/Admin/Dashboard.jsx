import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings,
  Chat,
  Group,
  Message,
  Notifications,
  Person,
} from "@mui/icons-material";
import moment from "moment";
import {
  SearchField,
  CurveButton,
} from "../../components/styles/StyledComponent.jsx";
import {LineChart, DoughnutChart} from "../../components/specific/Charts.jsx"

const Dashboard = () => {
  const AppBar = (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          margin: "2rem 0",
          borderRadius: "1rem",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <AdminPanelSettings sx={{ fontSize: "2.5rem" }} />
          <SearchField type="text" placeholder="Search..." />
          <CurveButton>Search</CurveButton>
          <Box flexGrow={1}></Box>
          <Typography
            display={{
              xs: "none",
              lg: "block",
            }}
          >
            {moment().format("MMMM Do YYYY")}
          </Typography>
          <Notifications />
        </Stack>
      </Paper>
    </>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        lg: "row",
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={
        {
          xs: "center",
          lg: "stretch"
        }
      }
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} icon={<Person />} />
      <Widget title={"Chats"} value={3} icon={<Chat />} />
      <Widget title={"Messages"} value={45} icon={<Message />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}

        <Stack direction={{
          xs: "column",
          sm: "row"
        }} justifyContent={"center"} spacing={"4rem"} flexWrap={"wrap"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 4rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
              marginBottom: "2rem !important",
            }}
          >
            <Typography margin={"2rem 0"}>Last Messages</Typography>
            <LineChart value={[27,3,2,1,34,1]}/>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              width: "100%",
              maxWidth: "45rem",
              height: "25rem",
              margin: "0 !important"
            }}
          >
            <DoughnutChart value={[1,33]} labels={["single chats", "group chats"]}/>
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <Group />
              <Typography> Vs </Typography>
              <Person />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, icon }) => (
  <Paper 
  elevation={3}
  sx={{
    padding: "2rem",
    margin: "2rem 0",
    borderRadius: "1.5rem",
    width: "20rem"
  }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid rgba(0,0,0,0.9)",
          width: "5rem",
          height :"5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >{value}</Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
