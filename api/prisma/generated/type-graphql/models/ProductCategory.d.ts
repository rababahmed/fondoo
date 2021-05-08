import { OrderElement } from "../models/OrderElement";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";
export declare class ProductCategory {
    id: string;
    createdAt: Date;
    name: string;
    description?: string | null;
    image?: string | null;
    isActive?: boolean | null;
    isFeatured?: boolean | null;
    restaurants?: Restaurant;
    restaurantId: string;
    Product?: Product[];
    OrderElement?: OrderElement[];
}
