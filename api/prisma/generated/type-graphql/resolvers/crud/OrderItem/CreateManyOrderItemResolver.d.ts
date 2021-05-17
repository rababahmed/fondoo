import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrderItemArgs } from "./args/CreateManyOrderItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrderItemResolver {
    createManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderItemArgs): Promise<AffectedRowsOutput>;
}
