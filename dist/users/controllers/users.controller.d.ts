import { UserDTO, UserUpdateDTO } from '../dto/';
import { UsersEntity } from '../entities/users.entity';
import { UsersService } from '../services/users.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(body: UserDTO): Promise<UsersEntity>;
    findAll(pagination: PaginationDto): Promise<UsersEntity[]>;
    findOne(id: string): Promise<UsersEntity>;
    update(id: string, body: UserUpdateDTO): Promise<UserUpdateDTO>;
    delete(id: string): Promise<{}>;
}
