import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerAddressArgs } from "./args/FindUniqueCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class FindUniqueCustomerAddressResolver {
    customerAddress(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerAddressArgs): Promise<CustomerAddress | null>;
}
