import UserModel from "../models/user.model";
import {UserDto} from "../dtos/user.dto";

export class UserService {

    private static instance: UserService;

    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return this.instance;
    }

    async getUserById(userId: number): Promise<any> {
        return UserModel.findOne<UserModel>({ where: { id: userId } });
    }

    async findAll(): Promise<UserModel[]> {
        return UserModel
            .findAll<UserModel>();
    }

    async createUser(user: UserDto): Promise<UserModel> {
        console.log("User: ", user);
        const object = await UserModel.create({
            username: user.username,
            email: user.email,
            password: user.password
        });
        console.log("Object: ", object);
        return object;
    }

}
