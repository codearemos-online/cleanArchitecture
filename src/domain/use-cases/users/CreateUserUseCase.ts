import { IUserRepository } from "../../../application/repositories/IUserRepository";
import { User } from "../../entities/User";

export class CreateUserUseCase {
    constructor(private userRepository:IUserRepository){}

    async execute(user:User):Promise<User>{
        return this.userRepository.create(user);
    }
}