import { Order } from "../models/Order";
import { Restaurant } from "../models/Restaurant";
import { UserToken } from "../models/UserToken";
export declare class User {
    id: number;
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string | null;
    token?: UserToken[];
    role: "Manager" | "Owner" | "Admin" | "SuperAdmin";
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
    orders?: Order[];
}
