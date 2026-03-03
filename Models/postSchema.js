import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        message: "No Value Submitted At userId"
    },
    post: {
        type: String,
        required: true,
        message: "No Value Submitted At Post"
    }
});

export default mongoose.model('Post', postSchema);