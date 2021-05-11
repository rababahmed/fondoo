import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRestaurantArgs } from "./args/DeleteManyRestaurantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRestaurantResolver {
    deleteManyRestaurant(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRestaurantArgs): Promise<AffectedRowsOutput>;
}
