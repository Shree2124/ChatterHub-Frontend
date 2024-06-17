import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/specific/Table.jsx";
import { Avatar, Stack } from "@mui/material";
import { dashboardData } from "../../constants/SampleData.js";
import { transformImage } from "../../lib/features.js";
import AvatarCard from "../../components/shared/AvatarCard.jsx";

const column = [
  {
    field: "id",
    headerName: "ID",
    headerClass: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClass: "table-header",
    width: 150,
    renderCell: (params) => (
      <AvatarCard alt={params.row.name} avatar={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClass: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClass: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClass: "table-header",
    width: 400,
    render: (params) => <AvatarCard avatar={params.row.members} />,
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClass: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClass: "table-header",
    width: 250,
    renderCell: (params) => {
      // console.log(params.row.creator);
      return (
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar}/>
        <span>{params.row.creator.name}</span>
      </Stack>
      );
    },
  },
];

const ChatManagement = () => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    setRow(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((i) => transformImage(i, 50)),
        members: i.members.map((i) => {
          console.log(i.avatar);
          return transformImage(i.avatar, 50);
        }),
        creator: {
          name: i.creator.name,
          avatar: transformImage(i.creator.avatar, 50),
        },
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Table heading={"All Chats"} col={column} row={row}></Table>
    </AdminLayout>
  );
};

export default ChatManagement;
