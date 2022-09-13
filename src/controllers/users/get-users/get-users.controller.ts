import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../entities/user.entity';

@Controller('api/get-users')
export class GetUsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.usersService.getAll();
    }
}
