import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
export declare class AggregateCustomer {
    count: CustomerCountAggregate | null;
    min: CustomerMinAggregate | null;
    max: CustomerMaxAggregate | null;
}
