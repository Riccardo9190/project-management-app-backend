import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from "../../config/jwtConfig";

function verifyToken(req: Request, res: Response, next: NextFunction) {
	const token = req.headers["authorization"];

	if (!token || !token.startsWith("Bearer ")) {
		return res
			.status(401)
			.json({ message: "Authentication token not provided" });
	}

	// Extracts the JWT token from the Authorization header by removing the "Bearer" prefix
	const tokenJWT = token.split(" ")[1];

	try {
		const decoded = jwt.verify(tokenJWT, jwtConfig.secretKey);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid authentication token" });
	}
}

export default verifyToken;
