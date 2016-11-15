﻿import { IUser } from './user.interface';

export class User implements  IUser{
    displayName: string;
    username: string;
    password: string;
    email: string;
    created: number;
}
