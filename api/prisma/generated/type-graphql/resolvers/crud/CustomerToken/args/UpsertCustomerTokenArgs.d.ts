import { CustomerTokenCreateInput } from "../../../inputs/CustomerTokenCreateInput";
import { CustomerTokenUpdateInput } from "../../../inputs/CustomerTokenUpdateInput";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";
export declare class UpsertCustomerTokenArgs {
    where: CustomerTokenWhereUniqueInput;
    create: CustomerTokenCreateInput;
    update: CustomerTokenUpdateInput;
}
