import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrderArgs } from "./args/DeleteManyOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrderResolver {
    deleteManyOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderArgs): Promise<AffectedRowsOutput>;
}
