import { Prisma } from "@prisma/client";
import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { Restaurant } from "../models/Restaurant";
import { User } from "../models/User";
export declare class Order {
    id: number;
    items: Prisma.JsonValue;
    coupon?: string | null;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    user?: User;
    restaurant?: Restaurant;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    restaurantId: string;
    Customer?: Customer | null;
    customerId?: number | null;
    CustomerAddress?: CustomerAddress | null;
    customerAddressId?: number | null;
}
