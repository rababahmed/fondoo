import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomerTokenArgs } from "./args/FindManyCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class FindManyCustomerTokenResolver {
    findManyCustomerToken(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomerTokenArgs): Promise<CustomerToken[]>;
}
