import { GraphQLResolveInfo } from "graphql";
import { DeleteRestaurantArgs } from "./args/DeleteRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
export declare class DeleteRestaurantResolver {
    deleteRestaurant(ctx: any, info: GraphQLResolveInfo, args: DeleteRestaurantArgs): Promise<Restaurant | null>;
}
