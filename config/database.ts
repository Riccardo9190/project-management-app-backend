import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL =
	process.env.MONGO_URL || "mongodb://127.0.0.1:27017/project_management_db";

export default async function connectToDatabase(): Promise<void> {
	try {
		await mongoose.connect(MONGO_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
}
