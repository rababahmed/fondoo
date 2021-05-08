import { CustomerAddressAvgAggregate } from "../outputs/CustomerAddressAvgAggregate";
import { CustomerAddressCountAggregate } from "../outputs/CustomerAddressCountAggregate";
import { CustomerAddressMaxAggregate } from "../outputs/CustomerAddressMaxAggregate";
import { CustomerAddressMinAggregate } from "../outputs/CustomerAddressMinAggregate";
import { CustomerAddressSumAggregate } from "../outputs/CustomerAddressSumAggregate";
export declare class CustomerAddressGroupBy {
    id: number;
    createdAt: Date;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    customerId: number | null;
    count: CustomerAddressCountAggregate | null;
    avg: CustomerAddressAvgAggregate | null;
    sum: CustomerAddressSumAggregate | null;
    min: CustomerAddressMinAggregate | null;
    max: CustomerAddressMaxAggregate | null;
}
