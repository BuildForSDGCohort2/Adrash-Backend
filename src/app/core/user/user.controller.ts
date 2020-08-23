import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CustomResponse } from '@app/shared/interfaces/ResponseType';
import { User } from './user';

export interface UserQueryParams {
    firstName: string;
}

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('users')
    async findAll(@Query() query: UserQueryParams): Promise<CustomResponse<User>> {
        return {
            message: "Users has successfully retrieved",
            result: await this.userService.findAll(query)
        };
    }
 }
