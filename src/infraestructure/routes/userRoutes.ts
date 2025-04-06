import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { asyncHandler } from "../../shared/utils/asyncHandler";

const router = Router();

router.get("/:id", asyncHandler(UserController.getUserById));
router.get("/", asyncHandler(UserController.getUsers));

export default router;