import app from "./app.js"
import dotenv from "dotenv"
import ConnectDB from "./db/index.js"

dotenv.config({
    path: "./.evn"
})

const port = process.env.PORT || 8000


ConnectDB()
.then(()=>{
    console.log("Connected");
    app.listen(port, () => {
        console.log(`app is listening at http://localhost:${port}/`);
    })
})
.catch((err)=>{
    console.log(err);
})

