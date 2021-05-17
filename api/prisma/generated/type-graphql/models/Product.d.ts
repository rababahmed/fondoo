import { OrderItem } from "../models/OrderItem";
import { ProductCategory } from "../models/ProductCategory";
import { Restaurant } from "../models/Restaurant";
export declare class Product {
    id: string;
    createdAt: Date;
    name: string;
    description?: string | null;
    image?: string | null;
    price?: number | null;
    spiceLevel: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";
    isPopular?: boolean | null;
    isActive?: boolean | null;
    ProductCategory?: ProductCategory | null;
    productCategoryId?: string | null;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
    OrderItem?: OrderItem[];
}
