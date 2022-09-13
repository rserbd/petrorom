import { Body, Controller, Request, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../services/users/jwt-auth.guard';
import { User } from '../../../entities/user.entity';
import { UsersService } from '../../../services/users/users.service';

@Controller('api/update-user')
export class UpdateUserController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateUserById(@Request() req, @Param() id: number, @Body() user: User): Promise<User> {
        return await this.usersService.updateUser(req.user, id, user);
    }
}