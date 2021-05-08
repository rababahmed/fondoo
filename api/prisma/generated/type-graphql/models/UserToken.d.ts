import { User } from "../models/User";
export declare class UserToken {
    id: number;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    User?: User | null;
    userId?: number | null;
}
