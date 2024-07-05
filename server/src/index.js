import app from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.evn"
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}/`);
})

