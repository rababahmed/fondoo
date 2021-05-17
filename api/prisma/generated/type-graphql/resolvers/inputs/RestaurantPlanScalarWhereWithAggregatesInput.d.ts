import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RestaurantPlanScalarWhereWithAggregatesInput {
    AND?: RestaurantPlanScalarWhereWithAggregatesInput[] | undefined;
    OR?: RestaurantPlanScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RestaurantPlanScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    price?: FloatWithAggregatesFilter | undefined;
    isActive?: BoolWithAggregatesFilter | undefined;
}
