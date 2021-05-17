import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRestaurantPlanArgs } from "./args/DeleteManyRestaurantPlanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRestaurantPlanResolver {
    deleteManyRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRestaurantPlanArgs): Promise<AffectedRowsOutput>;
}
