import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from 'mongoose';
@Schema({timestamps: true})
export class User extends Document {
    @Prop({index: true})
    firstName: string;
    @Prop({index: true})
    lastName: string;
    @Prop({required: true, unique: true})
    username: string;
    @Prop({default: false})
    isAdmin: boolean;
    @Prop({default: false})
    isVerified: boolean;
    @Prop({default: true})
    isActive: boolean;
    @Prop({required: true})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);