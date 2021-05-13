import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomerTokenArgs } from "./args/UpdateManyCustomerTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomerTokenResolver {
    updateManyCustomerToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomerTokenArgs): Promise<AffectedRowsOutput>;
}
