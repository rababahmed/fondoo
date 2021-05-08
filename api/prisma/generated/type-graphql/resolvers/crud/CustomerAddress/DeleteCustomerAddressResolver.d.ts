import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomerAddressArgs } from "./args/DeleteCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class DeleteCustomerAddressResolver {
    deleteCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomerAddressArgs): Promise<CustomerAddress | null>;
}
