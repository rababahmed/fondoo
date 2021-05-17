import { CustomerAddressCountAggregate } from "../outputs/CustomerAddressCountAggregate";
import { CustomerAddressMaxAggregate } from "../outputs/CustomerAddressMaxAggregate";
import { CustomerAddressMinAggregate } from "../outputs/CustomerAddressMinAggregate";
export declare class AggregateCustomerAddress {
    count: CustomerAddressCountAggregate | null;
    min: CustomerAddressMinAggregate | null;
    max: CustomerAddressMaxAggregate | null;
}
