import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrderItemArgs } from "./args/DeleteManyOrderItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrderItemResolver {
    deleteManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderItemArgs): Promise<AffectedRowsOutput>;
}
