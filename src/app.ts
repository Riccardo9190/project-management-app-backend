import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectToDatabase from "../config/database";
import { authRouter } from "./routes";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);

	connectToDatabase();
});
