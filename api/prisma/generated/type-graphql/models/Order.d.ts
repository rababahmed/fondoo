import { Coupon } from "../models/Coupon";
import { Customer } from "../models/Customer";
import { OrderItem } from "../models/OrderItem";
import { Restaurant } from "../models/Restaurant";
export declare class Order {
    id: number;
    items?: OrderItem[];
    address?: string | null;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    Coupon?: Coupon | null;
    couponId?: string | null;
    restaurant?: Restaurant;
    restaurantId: string;
    Customer?: Customer | null;
    customerId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
