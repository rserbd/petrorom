import { Body, Controller, Get, Param } from '@nestjs/common';
import { User } from '../../../entities/user.entity';
import { UsersService } from '../../../services/users/users.service';

@Controller('api/get-user')
export class GetUserController {
    constructor(private usersService: UsersService) {}

    @Get(':id')
    async getUserById(@Param() id: number): Promise<User> {
        return await this.usersService.getOneById(id);
    }
}
