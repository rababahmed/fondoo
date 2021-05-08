import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomerTokenArgs } from "./args/DeleteCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
export declare class DeleteCustomerTokenResolver {
    deleteCustomerToken(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomerTokenArgs): Promise<CustomerToken | null>;
}
