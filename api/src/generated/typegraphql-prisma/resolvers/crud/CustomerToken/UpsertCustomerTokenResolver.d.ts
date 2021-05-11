import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomerTokenArgs } from "./args/UpsertCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class UpsertCustomerTokenResolver {
    upsertCustomerToken(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomerTokenArgs): Promise<CustomerToken>;
}
