import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { asyncHandler } from "../../shared/utils/asyncHandler";

const router = Router();

router.get("/:id", asyncHandler(UserController.getUserById));
router.get("/", asyncHandler(UserController.getUsers));
router.post("/", asyncHandler(UserController.createUser));
router.put("/:id", asyncHandler(UserController.updateUser));
router.delete("/:id", asyncHandler(UserController.deleteUser));


export default router;