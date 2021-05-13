import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomerAddressArgs } from "./args/UpsertCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class UpsertCustomerAddressResolver {
    upsertCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomerAddressArgs): Promise<CustomerAddress>;
}
