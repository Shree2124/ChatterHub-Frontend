import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/specific/Table.jsx";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../constants/SampleData.js";
import { transformImage } from "../../lib/features.js"

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
    renderCell: (params)=><Avatar alt={params.row.name} src={params.row.avatar}/>
  },
  {
    field: "name",
    headerName: "Name",
    headerClass: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "Username",
    headerClass: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClass: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClass: "table-header",
    width: 200,
  },
];

const UserManagement = () => {
  const [row, setRow] = useState([]);
  useEffect(()=>{
    setRow(dashboardData.user.map((i)=>({...i, id: i._id,avatar: transformImage(i.avatar, 50)})))
  },[])
  return (
    <AdminLayout>
      <Table heading={"All Users"} col={column} row={row}></Table>
    </AdminLayout>
  );
};

export default UserManagement;
