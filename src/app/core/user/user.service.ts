import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/shared/service/base.service';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService extends BaseService<User>  {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        ) {
        super();
        this._model = this.userModel;
     }
}
