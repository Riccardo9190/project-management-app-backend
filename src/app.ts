import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectToDatabase from "../config/database";
import { mainRouter } from "./routes";

const app = express();

app.use(express.json());
app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);

	connectToDatabase();
});
