import { Restaurant } from "../models/Restaurant";
import { UserToken } from "../models/UserToken";
export declare class User {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | null;
    token?: UserToken[];
    restaurants?: Restaurant[];
    role: "Manager" | "Owner" | "Admin" | "SuperAdmin";
}
