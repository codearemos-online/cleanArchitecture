import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
    await UserController.getUserById(req, res);
});

export default router;