import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.routes.js"
dotenv.config();
const app = express();

// app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/login', (req, res) => {
//     res.send('Login Page');
// });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
