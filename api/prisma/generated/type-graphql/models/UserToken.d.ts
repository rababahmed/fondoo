import { User } from "../models/User";
export declare class UserToken {
    id: number;
    token: string;
    provider?: string | null;
    createdAt: Date;
    updatedAt: Date;
    User?: User | null;
    userId?: number | null;
}
