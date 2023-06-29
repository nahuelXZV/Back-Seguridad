import { AuthDTO } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: AuthDTO): Promise<any>;
    checkToken(token: {
        token: string;
    }): Promise<false | import("../../users/entities/users.entity").UsersEntity>;
}
