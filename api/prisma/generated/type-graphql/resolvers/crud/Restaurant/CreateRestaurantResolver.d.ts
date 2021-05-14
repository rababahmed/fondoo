import { GraphQLResolveInfo } from "graphql";
import { CreateRestaurantArgs } from "./args/CreateRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class CreateRestaurantResolver {
    createRestaurant(ctx: any, info: GraphQLResolveInfo, args: CreateRestaurantArgs): Promise<Restaurant>;
}
