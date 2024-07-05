import mongoose, { Schema, model, Types } from "mongoose";

const requestSchema = new Schema({
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "success", "rejected"],
    },
    sender: {
        type: Types.ObjectId,
        ref: "User",
        require: true,
    },
    receiver: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export const Request = mongoose.models.Request || model("Request", requestSchema);