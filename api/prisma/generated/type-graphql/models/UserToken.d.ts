import { User } from "../models/User";
export declare class UserToken {
    id: string;
    token: string;
    provider?: string | null;
    createdAt: Date;
    updatedAt: Date;
    User?: User | null;
    userId?: string | null;
}
