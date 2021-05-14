import { GraphQLResolveInfo } from "graphql";
import { CreateCustomerTokenArgs } from "./args/CreateCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class CreateCustomerTokenResolver {
    createCustomerToken(ctx: any, info: GraphQLResolveInfo, args: CreateCustomerTokenArgs): Promise<CustomerToken>;
}
