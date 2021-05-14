import { GraphQLResolveInfo } from "graphql";
import { UpsertRestaurantArgs } from "./args/UpsertRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class UpsertRestaurantResolver {
    upsertRestaurant(ctx: any, info: GraphQLResolveInfo, args: UpsertRestaurantArgs): Promise<Restaurant>;
}
