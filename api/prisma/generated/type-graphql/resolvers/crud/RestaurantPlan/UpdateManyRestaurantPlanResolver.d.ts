import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRestaurantPlanArgs } from "./args/UpdateManyRestaurantPlanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRestaurantPlanResolver {
    updateManyRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRestaurantPlanArgs): Promise<AffectedRowsOutput>;
}
