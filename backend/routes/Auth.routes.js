import { Router } from "express";
import { Login, Register, getCurrentUser } from "../controllers/Auth.controllers.js";
import { protecter } from "../middlewares/auth.js";

const router = Router();

router.post("/login", Login)
router.post("/register", Register)
router.get("/get-current-user", protecter, getCurrentUser)

export default router;