import mongoose from "mongoose";

const accomplishmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    accomplishment: {
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
},
    { timestamps: true }
)

accomplishmentSchema.index({ userId: 1 });

export default mongoose.model('Accomplishment', accomplishmentSchema);