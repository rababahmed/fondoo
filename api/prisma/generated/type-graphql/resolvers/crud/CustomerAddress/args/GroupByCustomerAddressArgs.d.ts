import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressScalarWhereWithAggregatesInput } from "../../../inputs/CustomerAddressScalarWhereWithAggregatesInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
export declare class GroupByCustomerAddressArgs {
    where?: CustomerAddressWhereInput | undefined;
    orderBy?: CustomerAddressOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "streetAddress" | "city" | "postCode" | "country" | "customerId">;
    having?: CustomerAddressScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
