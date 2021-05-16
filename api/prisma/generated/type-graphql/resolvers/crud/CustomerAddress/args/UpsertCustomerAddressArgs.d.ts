import { CustomerAddressCreateInput } from "../../../inputs/CustomerAddressCreateInput";
import { CustomerAddressUpdateInput } from "../../../inputs/CustomerAddressUpdateInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";
export declare class UpsertCustomerAddressArgs {
    where: CustomerAddressWhereUniqueInput;
    create: CustomerAddressCreateInput;
    update: CustomerAddressUpdateInput;
}
