import {Hidden, styled} from "@mui/material"

export const VisuallyHiddenInput = styled("input")({
    border:0,
    clip: "rect(0, 0, 0, 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    width: 1,
    whiteSpace: "nowrap",
    position: "absolute"
})