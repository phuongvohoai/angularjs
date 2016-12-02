import { ICategory } from './category.interface';

export class Category implements ICategory {
    id: string;
    name: string;
    description: string;
    isGroup: boolean;
    groupID: number;
}   