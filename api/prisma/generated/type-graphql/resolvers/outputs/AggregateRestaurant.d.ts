import { RestaurantCountAggregate } from "../outputs/RestaurantCountAggregate";
import { RestaurantMaxAggregate } from "../outputs/RestaurantMaxAggregate";
import { RestaurantMinAggregate } from "../outputs/RestaurantMinAggregate";
export declare class AggregateRestaurant {
    count: RestaurantCountAggregate | null;
    min: RestaurantMinAggregate | null;
    max: RestaurantMaxAggregate | null;
}
