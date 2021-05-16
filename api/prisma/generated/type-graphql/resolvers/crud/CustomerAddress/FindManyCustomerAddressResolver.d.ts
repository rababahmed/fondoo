import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomerAddressArgs } from "./args/FindManyCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class FindManyCustomerAddressResolver {
    findManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomerAddressArgs): Promise<CustomerAddress[]>;
}
