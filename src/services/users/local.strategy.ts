import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {

        const foundUser = await this.usersService.validateUser(username, password);
        if(!foundUser) {
            throw new UnauthorizedException();
        }
        return foundUser;
    } 
}