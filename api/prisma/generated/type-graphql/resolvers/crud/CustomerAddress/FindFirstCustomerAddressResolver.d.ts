import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerAddressArgs } from "./args/FindFirstCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class FindFirstCustomerAddressResolver {
    findFirstCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomerAddressArgs): Promise<CustomerAddress | null>;
}
