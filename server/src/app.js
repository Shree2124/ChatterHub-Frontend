import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use(cors({
//     origin: 
// }))

// configuration of data: -
    // for json
        app.use(
            express.json({
                limit: "16kb"
            })
        )

    // for url
        app.use(
            express.urlencoded({ extended: true, limit: "16kb" })
        )

    // for public assets
        app.use(
            express.static("public")
        )

    // for cookies (CRUD): -
        app.use(cookieParser())


    // sample router: -
        app.get("/",(req,res)=>{
            res.send("hello")
        })

export default app