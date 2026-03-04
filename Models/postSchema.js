import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: String,
        required: true,
        message: "No Value Submitted At Post"
    }
},
    { timestamps: true }
);

export default mongoose.model('Post', postSchema);