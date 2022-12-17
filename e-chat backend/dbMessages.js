import mongoose from "mongoose";

const echatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

export default mongoose.model('messageContent', echatSchema)