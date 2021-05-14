import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrderArgs } from "./args/UpdateManyOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrderResolver {
    updateManyOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderArgs): Promise<AffectedRowsOutput>;
}
