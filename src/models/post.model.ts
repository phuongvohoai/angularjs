import { IPost } from './post.interface';

export class Post implements IPost {
    title: string;
    category: string;
    type: string;
    jobPosition: string;
    describe: string;
    cost: number;
    applyDeadline: string;
    distance: number;
    status: string;
}   