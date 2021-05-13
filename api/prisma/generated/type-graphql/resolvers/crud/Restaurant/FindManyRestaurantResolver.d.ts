import { GraphQLResolveInfo } from "graphql";
import { FindManyRestaurantArgs } from "./args/FindManyRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class FindManyRestaurantResolver {
    restaurants(ctx: any, info: GraphQLResolveInfo, args: FindManyRestaurantArgs): Promise<Restaurant[]>;
}
