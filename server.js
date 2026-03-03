// Imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { logReq, globalErr } from "./Middleware/middleware.js"
import connectDatabase from "./DB/conn.js";
import userRoutes from "./Routes/userRoutes.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDatabase();


// ( Request ) Middleware
app.use(cors());
app.use(express.json());
app.use(logReq);

// Routes
app.use('/api/user', userRoutes)

// Global Error Handling Middleware
app.use(globalErr);

// Listener
app.listen( PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`)
});