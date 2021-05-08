import { Order } from "../models/Order";
import { ProductCategory } from "../models/ProductCategory";
export declare class OrderElement {
    id: string;
    code: string;
    name: string;
    description: string;
    image?: string | null;
    price: number;
    category?: ProductCategory;
    addonText?: string | null;
    Order?: Order | null;
    orderId?: number | null;
    productCategoryId: string;
    createdAt: Date;
    updatedAt: Date;
}
