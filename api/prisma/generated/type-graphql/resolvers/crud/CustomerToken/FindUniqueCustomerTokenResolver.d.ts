import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerTokenArgs } from "./args/FindUniqueCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class FindUniqueCustomerTokenResolver {
    findUniqueCustomerToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerTokenArgs): Promise<CustomerToken | null>;
}
