import mongoose, { Schema, Document } from "mongoose";

export interface userDocument extends Document {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema: Schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model<userDocument>("User", UserSchema);

export default User;