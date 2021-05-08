import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { OrderElement } from "../models/OrderElement";
import { Product } from "../models/Product";
import { Restaurant } from "../models/Restaurant";
export declare class Order {
    id: number;
    elements?: OrderElement[];
    charges?: number | null;
    total?: number | null;
    isAccepted?: boolean | null;
    customerAddress?: CustomerAddress;
    restaurant?: Restaurant | null;
    restaurantId?: string | null;
    customer?: Customer | null;
    customerId?: number | null;
    product?: Product[];
    customerAddressId: number;
    createdAt: Date;
    updatedAt: Date;
}
