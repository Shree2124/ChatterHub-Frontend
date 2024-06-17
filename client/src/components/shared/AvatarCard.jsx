import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features.js";

const AvatarCard = ({ avatar= [], max = 4 }) => {
  // console.log(avatar);
  return (
    <>
      <Stack direction={"row"} spacing={0.5}>
        <AvatarGroup max={max} sx={{
          position: "relative"
        }}>
            <Box height={"3rem"} width={"3rem"}>
            {
                avatar?.map((src,index)=>{
                  console.log(src);
                    return <Avatar 
                    key={Math.random() * 100}
                    src={transformImage(src)}
                    alt={`Avatar ${index}`}
                    sx={{
                        width:"3rem",
                        height:"3rem",
                        position: "absolute",
                        left: {
                            xs: `${0.5 + index}rem`,
                            sm: `${index}rem`
                        }
                    }}
                    />}
                    )
                  
                }
        </Box>
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default AvatarCard;
