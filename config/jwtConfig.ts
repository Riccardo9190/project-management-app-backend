require("dotenv").config();

const secretKey = process.env.JWT_TOKEN || "aR5#zP9&cV2@eY8!uL3$mB7*qW4%fX6";

export default {
	secretKey: secretKey,
	expiresIn: "1h",
};
