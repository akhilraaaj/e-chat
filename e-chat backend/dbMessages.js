import mongoose from "mongoose";

const echatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

//collection
export default mongoose.model('messagecontents', echatSchema)