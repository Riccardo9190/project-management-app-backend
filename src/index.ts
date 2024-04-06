import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectToDatabase from "./config/database";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);

	connectToDatabase();
});
