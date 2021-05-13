import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomerAddressArgs } from "./args/UpdateCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class UpdateCustomerAddressResolver {
    updateCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomerAddressArgs): Promise<CustomerAddress | null>;
}
