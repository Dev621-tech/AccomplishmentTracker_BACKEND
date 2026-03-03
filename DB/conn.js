import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_URI || "";

async function connectDatabase(){
    try {
        await mongoose.connect(connectionString);

        console.log(`MongoDB Connected ....`)
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDatabase;