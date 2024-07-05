import mongoose from "mongoose"
import { dbName } from "../constants.js"

const ConnectDB = async () => {
    try {
        console.log(dbName);
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
        console.log("Connected Successfully");
    } catch (error) {
        console.log("MONGODB connection Error: - ",error.message);
        process.exit(1)
    }
}

export default ConnectDB