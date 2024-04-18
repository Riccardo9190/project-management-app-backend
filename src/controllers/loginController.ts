import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User, { UserDocument } from "../models/User";

export const loginController = {
	login: async (req: Request, res: Response) => {
		const { email, password } = req.body;

		try {
			const user: UserDocument | null = await User.findOne({ email });

			if (!user) {
				return res.status(401).json({ message: "User not found" });
			}

			const isPasswordValid = await bcrypt.compare(password, user.password);

			if (!isPasswordValid) {
				return res.status(401).json({ message: "Invalid credentials" });
			}

			return res.status(200).json({ message: "Login successful" });
		} catch (error) {
			return res.status(500).json({ message: "Internal server error" });
		}
	},
};
