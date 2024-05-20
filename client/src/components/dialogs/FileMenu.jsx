import React from "react";
import { Menu } from "@mui/material";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div style={{
        width: "10rem"
      }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto rerum
        optio molestiae reprehenderit magnam voluptas nobis, iste eum veritatis
        laboriosam, laudantium ad incidunt! In asperiores harum quia fugit nihil
        voluptas.
      </div>
    </Menu>
  );
};

export default FileMenu;
