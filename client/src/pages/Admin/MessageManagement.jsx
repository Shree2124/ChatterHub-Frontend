import React,{useEffect, useState} from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from "../../components/specific/Table.jsx";
import { Avatar, Box, Stack } from "@mui/material";
import { dashboardData } from "../../constants/SampleData.js";
import { FileFormat, transformImage } from "../../lib/features.js";
import AvatarCard from "../../components/shared/AvatarCard.jsx";
import RenderAttachment from "../../components/shared/RenderAttachment.jsx"
import moment from 'moment';



const column = [
  {
    field: "id",
    headerName: "ID",
    headerClass: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClass: "table-header",
    width: 200,
    renderCell: (params)=>{
      console.log(params.row.attachments);
    return (params.row.attachments.length>0) ? params.row.attachments.map((i)=>{
      const url =i.url
      const file = FileFormat(url)
      return (
        <Box key={i.public_id}>
          <a
            href={url}
            download
            target='_blank'
            style={{
              color: "black"
            }}
          >
            {RenderAttachment(file,url)}
          </a>
        </Box>
      )
    }):"No Attachment"
  }
  },
  {
    field: "content",
    headerName: "Content",
    headerClass: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Send By",
    headerClass: "table-header",
    width: 200,
    renderCell: (params)=>{
      return <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar}/>
        <span>{params.row.sender.name}</span>
      </Stack>}
    
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClass: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClass: "table-header",
    width: 100,
  },
  {
    field: "time",
    headerName: "Time",
    headerClass: "table-header",
    width: 250,
  },
];

const MessageManagement = () => {
  
  const [row, setRow] = useState([]);

  useEffect(()=>{
    setRow(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar,50)
        },
        time: moment(i.createdAt).format("MMMM DD YYYY, h:mm:ss a"),

      }))
    )
  },[])

  return (
    <AdminLayout>
      <Table heading={"All Chats"} row={row} col={column} rowHeight={210}/>
    </AdminLayout>
  )
}

export default MessageManagement
