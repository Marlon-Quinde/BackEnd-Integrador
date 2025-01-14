import fs from 'fs/promises';
import path from 'path';
import { IUser } from '../../interfaces/User-Json.interface';


const dataFilePath = path.join('src', 'data', 'users.json');
export default class AuthRepository {

    async readUsers(): Promise<IUser[] | Array<IUser>> {
        try {
            const data = await fs.readFile(dataFilePath, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    async writeUsers(users: []): Promise<void>{
        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8')
    }
    

    

}