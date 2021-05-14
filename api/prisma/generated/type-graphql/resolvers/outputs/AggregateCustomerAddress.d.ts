import { CustomerAddressAvgAggregate } from "../outputs/CustomerAddressAvgAggregate";
import { CustomerAddressCountAggregate } from "../outputs/CustomerAddressCountAggregate";
import { CustomerAddressMaxAggregate } from "../outputs/CustomerAddressMaxAggregate";
import { CustomerAddressMinAggregate } from "../outputs/CustomerAddressMinAggregate";
import { CustomerAddressSumAggregate } from "../outputs/CustomerAddressSumAggregate";
export declare class AggregateCustomerAddress {
    count: CustomerAddressCountAggregate | null;
    avg: CustomerAddressAvgAggregate | null;
    sum: CustomerAddressSumAggregate | null;
    min: CustomerAddressMinAggregate | null;
    max: CustomerAddressMaxAggregate | null;
}
