import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";
export declare class OrderItem {
    id: string;
    product?: Product;
    quantity: number;
    total: number;
    spiceLevel: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";
    productId: string;
    Order?: Order | null;
    orderId?: number | null;
    createdAt: Date;
    updatedAt: Date;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
}
