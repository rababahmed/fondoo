import { GraphQLResolveInfo } from "graphql";
import { CreateCustomerAddressArgs } from "./args/CreateCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
export declare class CreateCustomerAddressResolver {
    createCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: CreateCustomerAddressArgs): Promise<CustomerAddress>;
}
