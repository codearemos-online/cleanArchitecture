import { IUserRepository } from "../../../application/repositories/IUserRepository";
import { User } from "../../entities/User";

export class UpdateUserUseCase{
    constructor(private userRepository:IUserRepository){}

    async execute(user:User):Promise<User | null>{
        return this.userRepository.update(user);
    }
}