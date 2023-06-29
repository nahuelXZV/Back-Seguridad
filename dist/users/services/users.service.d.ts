import { Repository } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/';
import { UsersEntity } from '../entities/users.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DeleteResponse } from 'src/common/interfaces/deleteResponse.interface';
export declare class UsersService {
    private readonly userRepository;
    private readonly logger;
    constructor(userRepository: Repository<UsersEntity>);
    findAll(pagination: PaginationDto): Promise<UsersEntity[]>;
    create(userDto: UserDTO): Promise<UsersEntity>;
    findOne(id: string): Promise<UsersEntity>;
    update(id: string, userUpdateDto: UserUpdateDTO): Promise<UsersEntity>;
    delete(id: string): Promise<DeleteResponse>;
    findBy({ key, value }: {
        key: keyof UserDTO;
        value: any;
    }): Promise<UsersEntity>;
    findOneAuth(id: string): Promise<UsersEntity>;
    private hashPassword;
    handlerError(error: any): void;
}
