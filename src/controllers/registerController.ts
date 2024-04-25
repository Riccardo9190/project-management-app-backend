import { Request, Response } from "express";
import User, { UserDocument } from "../models/User";
import { generateToken } from "../utils/jwtUtils";

export const registerController = {
	save: async (req: Request, res: Response) => {
		const { name, email, password } = req.body.user;
		const user: UserDocument = new User({ name, email, password });

		try {
			await user.save();

			const token = generateToken(user);

			return res.status(201).json({ user, token });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}

			return res.status(500).json({ message: "Internal server error" });
		}
	},
};
