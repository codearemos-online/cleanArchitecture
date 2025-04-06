import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../domain/use-cases/users/GetUserByIdUseCase";
import { UserRepository } from "../repositories/UserRepository";
import { GetUsersUseCase } from "../../domain/use-cases/users/GetUsersUseCase";
import { CreateUserUseCase } from "../../domain/use-cases/users/createUserUseCase";
import { UpdateUserUseCase } from "../../domain/use-cases/users/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../domain/use-cases/users/DeleteUserUseCase";
import { User } from "../../domain/entities/User";
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

    static async getUsers(req:Request,res:Response){
        const getUserUseCase = new GetUsersUseCase(new UserRepository());
        const users = await getUserUseCase.execute();

        if(!users){
            res.status(404).json({message:"No users found"});
            return;
        }

        res.status(200).json(users);
    }

    static async createUser(req:Request,res:Response){
        const {id,name,email} = req.body;
        const createUserUseCase = new CreateUserUseCase(new UserRepository());
        const user = await createUserUseCase.execute(new User(id,name,email));

        if(!user){
            res.status(400).json({message:"Error creating user"});
            return;
        }

        res.status(201).json(user);
    }

    static async updateUser(req:Request,res:Response){
        const {id,name,email} = req.body;
        const updateUserUseCase = new UpdateUserUseCase(new UserRepository());
        const user = await updateUserUseCase.execute(new User(id,name,email));

        if(!user){
            res.status(404).json({message:"User not found"});
            return;
        }
        
        res.status(200).json(user);
    }

    static async deleteUser(req:Request,res:Response){
        const {id} = req.params;
        const deleteUserUseCase = new DeleteUserUseCase(new UserRepository());
        await deleteUserUseCase.execute(id);

        res.status(200).json({message:"User deleted successfully"});
    }
}