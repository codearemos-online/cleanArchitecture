import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../domain/use-cases/users/GetUserByIdUseCase";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
    static async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        const findByIdUseCase = new GetUserByIdUseCase(new UserRepository());
        const user = await findByIdUseCase.execute(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }
}