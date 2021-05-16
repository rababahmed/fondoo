import { CustomerAddressUncheckedCreateInput } from "../../../inputs/CustomerAddressUncheckedCreateInput";
import { CustomerAddressUncheckedUpdateInput } from "../../../inputs/CustomerAddressUncheckedUpdateInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";
export declare class UpsertCustomerAddressArgs {
    where: CustomerAddressWhereUniqueInput;
    create: CustomerAddressUncheckedCreateInput;
    update: CustomerAddressUncheckedUpdateInput;
}
