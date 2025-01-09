import { UserI } from "../../interfaces/Auth.interface";
import fs from 'fs/promises';
import path from 'path';
import User, { UserModel } from "../../models/User";

const dataFilePath = path.join('src', 'data', 'users.json');
export default class AuthRepository {

    async readUsers(): Promise<UserI[] | Array<UserI>> {
        try {
            const data = await fs.readFile(dataFilePath, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    async writeUsers(users: UserI[]): Promise<void>{
        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8')
    }

    async createUser(user: UserI): Promise<any> {
        return await User.create({
            email: user.email,
            nombre: user.username,
            password: user.password,
        })
    }

    async findByUsername(email: string): Promise<UserModel | null> {
        const usuario = await User.findOne({
            where: {
                email
            }
        })
        return usuario
    }

}