import express from "express"
import router from "./routes/user.routes.js"

const app = express()


app.listen(3000,()=>{
    console.log("App is listening on 3000");
})

app.use("/user",router)


// app.get("/",(req,res)=>{
//     res.send("hello")
// })