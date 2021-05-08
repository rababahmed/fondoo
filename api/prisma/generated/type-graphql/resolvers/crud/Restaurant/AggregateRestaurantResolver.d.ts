import { GraphQLResolveInfo } from "graphql";
import { AggregateRestaurantArgs } from "./args/AggregateRestaurantArgs";
import { AggregateRestaurant } from "../../outputs/AggregateRestaurant";
export declare class AggregateRestaurantResolver {
    aggregateRestaurant(ctx: any, info: GraphQLResolveInfo, args: AggregateRestaurantArgs): Promise<AggregateRestaurant>;
}
