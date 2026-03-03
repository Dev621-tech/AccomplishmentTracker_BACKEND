import mongoose from "mongoose";

const accomplishmentSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        message: "No Value Submitted At userId"
    },
    accompplishment: {
        type: String,
        required: true,
        message: "No Value Submitted At Accomplishment"
    },
    completed: {
        type: Boolean,
        default: false
    },
    notes: {
        type: [String]
    }
})

export default mongoose.model('Accomplishment', accomplishmentSchema);