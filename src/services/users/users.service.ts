import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, private jwt: JwtService) {
    }

    // Get all users

    getAll(): Promise<User[]> {
        return this.usersRepository.find({
            relations: ['offers']
        }); // SELECT * from user JOIN offer
    }
    
    // Get user by id

    async getOneById(userId: number): Promise<User> {
        try{
            const user = await this.usersRepository.findOneOrFail({
                where: {
                    id: userId
                },
                relations: ['offers']
            });
            return user;
        } catch (err) {
            throw err;
        }
    }

    // Create new user

    async createUser(user: User): Promise<User> {
        const newUser = this.usersRepository.create(user);
        
        return this.usersRepository.save(newUser); // INSERT 
    }

    // Update existing user by id

    async updateUser(user:User, id: number, updatedUser: User): Promise<User> {     
        if(user.role == "buyer") {
            const userToBeUpdated = await this.getOneById(id);

            userToBeUpdated.companyName = updatedUser.companyName;

            return this.usersRepository.save(userToBeUpdated); // UPDATE 
        } 

        throw new UnauthorizedException();
    }

    // Delete existing user by id

    async deleteUser(id: number): Promise<User> {
        const user = await this.getOneById(id);

        return this.usersRepository.remove(user); // DELETE
    }

    // SignUp

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;

        return await this.usersRepository.save(user);
    }

    // Validate User

    async validateUser(username: string, password: string): Promise<any> {
        const foundUser = await this.usersRepository.findOne({
            where: {
                username: username
            }
        });
        
        if(foundUser) {
            if(await bcrypt.compare(password, foundUser.password)) {
                const {password, ...result} = foundUser;
                return result;
            }
            return null;
        }
        return null;
    }

    // Login

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role };

        return {
            access_token: this.jwt.sign(payload),
        };
    }
}
