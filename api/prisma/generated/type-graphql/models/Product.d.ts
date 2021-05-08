import { CartElement } from "../models/CartElement";
import { Order } from "../models/Order";
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
    category?: ProductCategory;
    isPopular?: boolean | null;
    isActive?: boolean | null;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
    Order?: Order | null;
    orderId?: number | null;
    CartElement?: CartElement[];
    productCategoryId: string;
}
