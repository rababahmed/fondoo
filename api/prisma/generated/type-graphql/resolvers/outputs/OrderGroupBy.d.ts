import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";
export declare class OrderGroupBy {
    id: number;
    charges: number | null;
    total: number | null;
    isAccepted: boolean | null;
    restaurantId: string | null;
    customerId: number | null;
    customerAddressId: number;
    createdAt: Date;
    updatedAt: Date;
    count: OrderCountAggregate | null;
    avg: OrderAvgAggregate | null;
    sum: OrderSumAggregate | null;
    min: OrderMinAggregate | null;
    max: OrderMaxAggregate | null;
}
