import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../entities/user.entity';
import { LocalAuthGuard } from '../../services/users/jwt-auth.guard';

@Controller('api/auth/')
export class AuthController {
    constructor(private usersService: UsersService){};

    @Post('signup')
    async signup(@Body() user: User): Promise<User>{
        return this.usersService.signup(user);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        console.log();
        return this.usersService.login(req.user);
    }
}
 