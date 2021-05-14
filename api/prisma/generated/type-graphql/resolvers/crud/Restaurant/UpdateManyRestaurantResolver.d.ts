import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRestaurantArgs } from "./args/UpdateManyRestaurantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRestaurantResolver {
    updateManyRestaurant(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRestaurantArgs): Promise<AffectedRowsOutput>;
}
