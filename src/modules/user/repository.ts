import User, { UserAttributes } from "../../models/User";

export default class UserRepository {
    async CreateUser(payload: UserAttributes){
        return User.create({
            email: payload.email,
            password: payload.password,
            username: payload.username,
            dateOfBirth: payload.dateOfBirth
        })
    }

    async FindUserByEmail(email: string){
        return User.findOne({
            where: {
                email
            }
        })
    }
}