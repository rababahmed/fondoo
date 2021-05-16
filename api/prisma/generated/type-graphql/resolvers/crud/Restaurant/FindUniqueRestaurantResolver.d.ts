import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRestaurantArgs } from "./args/FindUniqueRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class FindUniqueRestaurantResolver {
    restaurant(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRestaurantArgs): Promise<Restaurant | null>;
}
