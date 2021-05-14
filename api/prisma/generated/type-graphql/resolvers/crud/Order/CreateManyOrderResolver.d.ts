import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrderArgs } from "./args/CreateManyOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrderResolver {
    createManyOrder(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderArgs): Promise<AffectedRowsOutput>;
}
