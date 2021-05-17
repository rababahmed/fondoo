import { RestaurantPlanAvgAggregate } from "../outputs/RestaurantPlanAvgAggregate";
import { RestaurantPlanCountAggregate } from "../outputs/RestaurantPlanCountAggregate";
import { RestaurantPlanMaxAggregate } from "../outputs/RestaurantPlanMaxAggregate";
import { RestaurantPlanMinAggregate } from "../outputs/RestaurantPlanMinAggregate";
import { RestaurantPlanSumAggregate } from "../outputs/RestaurantPlanSumAggregate";
export declare class AggregateRestaurantPlan {
    count: RestaurantPlanCountAggregate | null;
    avg: RestaurantPlanAvgAggregate | null;
    sum: RestaurantPlanSumAggregate | null;
    min: RestaurantPlanMinAggregate | null;
    max: RestaurantPlanMaxAggregate | null;
}
