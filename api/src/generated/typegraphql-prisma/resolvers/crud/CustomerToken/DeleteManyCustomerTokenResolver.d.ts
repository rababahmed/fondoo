import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomerTokenArgs } from "./args/DeleteManyCustomerTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomerTokenResolver {
    deleteManyCustomerToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomerTokenArgs): Promise<AffectedRowsOutput>;
}
