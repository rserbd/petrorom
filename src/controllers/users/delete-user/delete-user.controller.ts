import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { User } from '../../../entities/user.entity';
import { UsersService } from '../../../services/users/users.service';
import { JwtAuthGuard } from '../../../services/users/jwt-auth.guard';

@Controller('api/delete-user')
export class DeleteUserController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteUserById(@Param() id: number): Promise<User> {
        return await this.usersService.deleteUser(id);
    }
}
