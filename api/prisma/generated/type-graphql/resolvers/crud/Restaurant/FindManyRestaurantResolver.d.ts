import { GraphQLResolveInfo } from "graphql";
import { FindManyRestaurantArgs } from "./args/FindManyRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class FindManyRestaurantResolver {
    findManyRestaurant(ctx: any, info: GraphQLResolveInfo, args: FindManyRestaurantArgs): Promise<Restaurant[]>;
}
