import { IUserRepository } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class UserRepository implements IUserRepository{

    public users:User[] = [];

    constructor(){
        this.users = [
            new User("1","John Doe","john.doe@example.com"),
            new User("2","Jane Smith","jane.smith@example.com"),
            new User("3","Alice Johnson","alice.johnson@example.com"),
            new User("4","Diego Beltran","diego.beltran@example.com"),
        ];
    }

    async getAll(): Promise<User[] | null>{
        return this.users;
    }

    async getById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async create(user:User): Promise<User>{
        this.users.push(user);
        return user;
    }

    async update(user:User): Promise<User | null>{
        const index = this.users.findIndex(u => u.id === user.id);
        if(index !== -1){
            this.users[index] = user;
            return user;
        }
        return null;
    }

    async delete(id:string):Promise<void>{
        const index = this.users.findIndex(u => u.id === id);
        if(index !== -1){
            this.users.splice(index,1);
        }
    }
}