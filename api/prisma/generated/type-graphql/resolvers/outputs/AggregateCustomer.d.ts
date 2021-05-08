import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";
export declare class AggregateCustomer {
    count: CustomerCountAggregate | null;
    avg: CustomerAvgAggregate | null;
    sum: CustomerSumAggregate | null;
    min: CustomerMinAggregate | null;
    max: CustomerMaxAggregate | null;
}
