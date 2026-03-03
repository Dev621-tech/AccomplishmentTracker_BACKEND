// Imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


// ( Request ) Middleware

// Routes

// Global Error Handling Middleware

// Listener
app.listen( PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`)
});