import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { UserService } from './user.service';

export interface UserQueryParams {
    firstName: string;
}

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('users')
    async findAll(@Query() query: UserQueryParams) {
        console.log(query);
        return {
            message: "Users has successfully retrieved",
            result: await this.userService.findAll(query)
        };
    }
 }
