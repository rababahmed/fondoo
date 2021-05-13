import { GraphQLResolveInfo } from "graphql";
import { CreateManyRestaurantArgs } from "./args/CreateManyRestaurantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRestaurantResolver {
    createManyRestaurant(ctx: any, info: GraphQLResolveInfo, args: CreateManyRestaurantArgs): Promise<AffectedRowsOutput>;
}
