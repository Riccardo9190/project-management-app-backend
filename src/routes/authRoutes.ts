import express from "express";
import { registerController } from "../controllers/registerController";
import { loginController } from "../controllers/loginController";

const authRouter = express.Router();

authRouter.post("/register", registerController.save);

authRouter.post("/login", loginController.login);

export { authRouter };
