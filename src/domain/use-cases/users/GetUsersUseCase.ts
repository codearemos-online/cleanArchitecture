import { IUserRepository } from "../../../application/repositories/IUserRepository";
import { User } from "../../entities/User";

export class GetUsersUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute():Promise<User[] | null>{
        return this.userRepository.getAll();
    }
}