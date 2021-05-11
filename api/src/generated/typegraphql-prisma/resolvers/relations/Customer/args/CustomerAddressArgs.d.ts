import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressArgs {
    where?: CustomerAddressWhereInput | undefined;
    orderBy?: CustomerAddressOrderByInput[] | undefined;
    cursor?: CustomerAddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "streetAddress" | "city" | "postCode" | "country" | "customerId"> | undefined;
}
