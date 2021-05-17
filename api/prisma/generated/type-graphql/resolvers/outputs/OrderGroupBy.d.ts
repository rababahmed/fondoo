import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";
export declare class OrderGroupBy {
    id: number;
    address: string | null;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    couponId: string | null;
    restaurantId: string;
    customerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    count: OrderCountAggregate | null;
    avg: OrderAvgAggregate | null;
    sum: OrderSumAggregate | null;
    min: OrderMinAggregate | null;
    max: OrderMaxAggregate | null;
}
