import { styled } from "@mui/material"
import {Link as LinkComponent} from "react-router-dom"

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

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
    }
`