import { GraphQLResolveInfo } from "graphql";
import { UpdateRestaurantArgs } from "./args/UpdateRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class UpdateRestaurantResolver {
    updateRestaurant(ctx: any, info: GraphQLResolveInfo, args: UpdateRestaurantArgs): Promise<Restaurant | null>;
}
