import { Restaurant } from "../models/Restaurant";
export declare class RestaurantPlan {
    id: string;
    name: string;
    price: number;
    isActive: boolean;
    restaurants?: Restaurant[];
}
