import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";
export declare class AggregateCustomerAddressArgs {
    where?: CustomerAddressWhereInput | undefined;
    orderBy?: CustomerAddressOrderByInput[] | undefined;
    cursor?: CustomerAddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
