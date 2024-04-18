import { Request, Response } from "express";
import User from "../models/User";

export const registerController = {
	save: async (req: Request, res: Response) => {
		const { name, email, password } = req.body;
		const user = new User({ name, email, password });

		try {
			await user.save();
			return res.status(201).json(user);
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}
		}
	},
};
