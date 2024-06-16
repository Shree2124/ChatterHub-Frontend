import React from 'react'
import {Container, Paper, Typography} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { matBlack } from '../../constants/colors.js'

const Table = ({row, col, heading, rowHeight = 52}) => {
  return (
    <Container
      sx={{
        height: "100vh"
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          margin: "auto",
          borderRadius:"1rem",
          width: "100%",
          overflow: "hidden",
          height: "100%",
          boxSizing: "none"
        }}
      >
        <Typography
          textAlign={"center"}
          variant='h4'
          sx={{
            margin: "2rem",
            textTransform: "uppercase"
          }}
        >{heading}</Typography>
        <DataGrid 
          rows={row}
          columns={col}
          rowHeight={rowHeight}
          style={{
            height: "80%"
          }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: matBlack,
              color: "white"
            }
          }}
        ></DataGrid>
      </Paper>
    </Container>
  )
}

export default Table
