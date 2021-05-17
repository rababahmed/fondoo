import { CustomerAddressCountAggregate } from "../outputs/CustomerAddressCountAggregate";
import { CustomerAddressMaxAggregate } from "../outputs/CustomerAddressMaxAggregate";
import { CustomerAddressMinAggregate } from "../outputs/CustomerAddressMinAggregate";
export declare class CustomerAddressGroupBy {
    id: string;
    createdAt: Date;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    customerId: string | null;
    count: CustomerAddressCountAggregate | null;
    min: CustomerAddressMinAggregate | null;
    max: CustomerAddressMaxAggregate | null;
}
