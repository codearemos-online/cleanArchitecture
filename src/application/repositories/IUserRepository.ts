import { User } from "../../domain/entities/User";

export interface IUserRepository{
    getAll():Promise<User[] | null>;
    getById(id:string):Promise<User | null>;
    create(user:User):Promise<User>;
    update(user:User):Promise<User | null>;
    delete(id:string):Promise<void>;
}