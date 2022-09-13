import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../entities/user.entity';

@Controller('api/create-user')
export class CreateUserController {
    constructor(private usersService: UsersService) {}

    @Post()
    async postNewUser(@Body() user: User): Promise<User> {
        return await this.usersService.createUser(user);
    }
}
