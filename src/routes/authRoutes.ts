import express from "express";
import { registerController } from "../controllers/registerController";

const authRouter = express.Router();

authRouter.post("/register", registerController.save);

export { authRouter };
