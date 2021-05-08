import { Restaurant } from "../models/Restaurant";
import { UserToken } from "../models/UserToken";
export declare class User {
    id: number;
    createdAt: Date;
    fullName: string;
    email: string;
    password: string;
    phone?: string | null;
    token?: UserToken[];
    role: "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin";
    restaurants?: Restaurant[];
}
