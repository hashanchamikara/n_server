import UserModel from "../models/user.model";
import {UserDto} from "../dtos/user.dto";
import logger from "../config/logger";

class UserService {
    async getUserById(userId: number): Promise<any> {
        return UserModel.findOne<UserModel>({where: {id: userId}});
    }

    async findAll(pageRequest: PageRequest): Promise<PageResponse<UserModel>> {
        return UserModel
            .paginate<UserModel>(pageRequest);
    }

    async search(page: PageRequest): Promise<PageResponse<UserModel>> {
        return UserModel
            .paginate<UserModel>(page);
    }

    async createUser(user: UserDto): Promise<UserModel> {
        const userModel = await UserModel.create({
            username: user.username,
            email: user.email,
            password: user.password
        });
        logger.debug("Object: ", userModel);
        return userModel;
    }

}
const userService = new UserService();
export default userService;