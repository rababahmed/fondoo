import { CustomerTokenAvgAggregate } from "../outputs/CustomerTokenAvgAggregate";
import { CustomerTokenCountAggregate } from "../outputs/CustomerTokenCountAggregate";
import { CustomerTokenMaxAggregate } from "../outputs/CustomerTokenMaxAggregate";
import { CustomerTokenMinAggregate } from "../outputs/CustomerTokenMinAggregate";
import { CustomerTokenSumAggregate } from "../outputs/CustomerTokenSumAggregate";
export declare class CustomerTokenGroupBy {
    id: number;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    customerId: number | null;
    count: CustomerTokenCountAggregate | null;
    avg: CustomerTokenAvgAggregate | null;
    sum: CustomerTokenSumAggregate | null;
    min: CustomerTokenMinAggregate | null;
    max: CustomerTokenMaxAggregate | null;
}
