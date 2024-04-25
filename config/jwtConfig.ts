require("dotenv").config();

interface JwtConfig {
	secretKey: string;
	expiresIn: string;
}

const secretKey = process.env.JWT_TOKEN || "aR5#zP9&cV2@eY8!uL3$mB7*qW4%fX6";

const jwtConfig: JwtConfig = {
	secretKey: secretKey,
	expiresIn: "1h",
};

export default jwtConfig;
