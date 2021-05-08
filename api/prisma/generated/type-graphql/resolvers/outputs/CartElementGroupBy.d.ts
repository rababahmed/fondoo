import { CartElementAvgAggregate } from "../outputs/CartElementAvgAggregate";
import { CartElementCountAggregate } from "../outputs/CartElementCountAggregate";
import { CartElementMaxAggregate } from "../outputs/CartElementMaxAggregate";
import { CartElementMinAggregate } from "../outputs/CartElementMinAggregate";
import { CartElementSumAggregate } from "../outputs/CartElementSumAggregate";
export declare class CartElementGroupBy {
    id: string;
    quantity: number;
    customerId: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    count: CartElementCountAggregate | null;
    avg: CartElementAvgAggregate | null;
    sum: CartElementSumAggregate | null;
    min: CartElementMinAggregate | null;
    max: CartElementMaxAggregate | null;
}
