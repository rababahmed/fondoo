import { OrderElementAvgAggregate } from "../outputs/OrderElementAvgAggregate";
import { OrderElementCountAggregate } from "../outputs/OrderElementCountAggregate";
import { OrderElementMaxAggregate } from "../outputs/OrderElementMaxAggregate";
import { OrderElementMinAggregate } from "../outputs/OrderElementMinAggregate";
import { OrderElementSumAggregate } from "../outputs/OrderElementSumAggregate";
export declare class OrderElementGroupBy {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string | null;
    price: number;
    addonText: string | null;
    orderId: number | null;
    productCategoryId: string;
    createdAt: Date;
    updatedAt: Date;
    count: OrderElementCountAggregate | null;
    avg: OrderElementAvgAggregate | null;
    sum: OrderElementSumAggregate | null;
    min: OrderElementMinAggregate | null;
    max: OrderElementMaxAggregate | null;
}
