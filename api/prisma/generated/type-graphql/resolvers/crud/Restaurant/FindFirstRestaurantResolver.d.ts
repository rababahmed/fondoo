import { GraphQLResolveInfo } from "graphql";
import { FindFirstRestaurantArgs } from "./args/FindFirstRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class FindFirstRestaurantResolver {
    findFirstRestaurant(ctx: any, info: GraphQLResolveInfo, args: FindFirstRestaurantArgs): Promise<Restaurant | null>;
}
