import * as jwt from 'jsonwebtoken';
import { UsersEntity } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/services/users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<any>;
    singJWT({ payload, secret, expiresIn }: {
        payload: jwt.JwtPayload;
        secret: string;
        expiresIn: number | string;
    }): string;
    generateJWT(user: UsersEntity): Promise<any>;
    recoverPassword(email: string): Promise<any>;
    checkToken(tokenUser: {
        token: string;
    }): Promise<false | UsersEntity>;
}
