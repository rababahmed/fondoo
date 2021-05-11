import { Prisma } from "@prisma/client";
import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";
export declare class OrderGroupBy {
    id: number;
    items: Prisma.JsonValue;
    coupon: string | null;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    restaurantId: string;
    customerId: number | null;
    customerAddressId: number | null;
    count: OrderCountAggregate | null;
    avg: OrderAvgAggregate | null;
    sum: OrderSumAggregate | null;
    min: OrderMinAggregate | null;
    max: OrderMaxAggregate | null;
}
