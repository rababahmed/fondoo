import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrderItemArgs } from "./args/UpdateManyOrderItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrderItemResolver {
    updateManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderItemArgs): Promise<AffectedRowsOutput>;
}
