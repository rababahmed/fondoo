import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerTokenArgs } from "./args/FindFirstCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class FindFirstCustomerTokenResolver {
    findFirstCustomerToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomerTokenArgs): Promise<CustomerToken | null>;
}
