import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerAddressArgs } from "./args/FindUniqueCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class FindUniqueCustomerAddressResolver {
    findUniqueCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerAddressArgs): Promise<CustomerAddress | null>;
}
