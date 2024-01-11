export class UserService {
    static async getUserById(userId: number): Promise<any> {
        return { id: userId, username: 'user' };
    }
}
