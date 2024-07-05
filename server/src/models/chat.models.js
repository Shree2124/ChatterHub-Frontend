import mongoose, {Schema, model, Types} from "mongoose"

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    groupChat: {
        type: Boolean,
        default: false,
    },
    creator: {
        type: Types.ObjectId,
        ref: "User",
    },
    members: [
        {
            types: Types.ObjectId,
            ref: "User",
        }
    ],
    
},{timestamps: true})