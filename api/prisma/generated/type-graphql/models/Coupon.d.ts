import { Order } from "../models/Order";
export declare class Coupon {
    id: string;
    code: string;
    discount: "Fixed" | "Percent";
    value: number;
    description?: string | null;
    orders?: Order[];
}
