import { CustomerTokenCountAggregate } from "../outputs/CustomerTokenCountAggregate";
import { CustomerTokenMaxAggregate } from "../outputs/CustomerTokenMaxAggregate";
import { CustomerTokenMinAggregate } from "../outputs/CustomerTokenMinAggregate";
export declare class AggregateCustomerToken {
    count: CustomerTokenCountAggregate | null;
    min: CustomerTokenMinAggregate | null;
    max: CustomerTokenMaxAggregate | null;
}
