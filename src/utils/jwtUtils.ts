import jwt from "jsonwebtoken";
import jwtConfig from "../../config/jwtConfig";
import { UserDocument } from "../models/User";

function generateToken(user: UserDocument): string {
	const token = jwt.sign({ userId: user._id }, jwtConfig.secretKey, {
		expiresIn: jwtConfig.expiresIn,
	});
	return token;
}

export { generateToken };
