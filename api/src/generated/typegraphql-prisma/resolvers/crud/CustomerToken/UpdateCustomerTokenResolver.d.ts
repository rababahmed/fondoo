import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomerTokenArgs } from "./args/UpdateCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class UpdateCustomerTokenResolver {
    updateCustomerToken(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomerTokenArgs): Promise<CustomerToken | null>;
}
