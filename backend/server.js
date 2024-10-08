import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.routes.js"
import connectDB from './db/connectDB.js';
dotenv.config();
const app = express();

// app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`server running on port ${PORT}`)
});
