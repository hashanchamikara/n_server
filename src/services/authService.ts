export class AuthService {
    static async login(username: string, password: string): Promise<string | null> {
        if (username === 'user' && password === 'password') {
            return 'sampleToken';
        }
        return null;
    }
}
