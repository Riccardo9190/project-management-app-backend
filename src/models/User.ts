import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

export interface UserDocument extends Document {
	_id: Types.ObjectId;
	name: string;
	email: string;
	password: string;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	avatar: { type: String, default: "../../uploads/default.png" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre<UserDocument>("save", async function (next) {
	const user = this;

	if (!user.isModified("password")) {
		return next();
	}

	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(user.password, salt);
		user.password = hashedPassword;
		next();
	} catch (error) {
		if (error instanceof Error) {
			next(error);
		}
	}
});

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
