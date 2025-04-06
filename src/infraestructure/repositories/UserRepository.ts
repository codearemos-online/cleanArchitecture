import { IUserRepository } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class UserRepository implements IUserRepository{

    public users:User[] = [];

    constructor(){
        this.users = [
            new User("1","John Doe","john.doe@example.com"),
            new User("2","Jane Smith","jane.smith@example.com"),
            new User("3","Alice Johnson","alice.johnson@example.com"),
        ];
    }

    async getById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

}