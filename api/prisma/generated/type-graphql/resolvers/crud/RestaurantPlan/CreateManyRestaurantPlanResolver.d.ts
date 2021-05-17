import { GraphQLResolveInfo } from "graphql";
import { CreateManyRestaurantPlanArgs } from "./args/CreateManyRestaurantPlanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRestaurantPlanResolver {
    createManyRestaurantPlan(ctx: any, info: GraphQLResolveInfo, args: CreateManyRestaurantPlanArgs): Promise<AffectedRowsOutput>;
}
