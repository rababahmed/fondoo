import { BoolFilter } from "../inputs/BoolFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { RestaurantListRelationFilter } from "../inputs/RestaurantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class RestaurantPlanWhereInput {
    AND?: RestaurantPlanWhereInput[] | undefined;
    OR?: RestaurantPlanWhereInput[] | undefined;
    NOT?: RestaurantPlanWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    isActive?: BoolFilter | undefined;
    restaurants?: RestaurantListRelationFilter | undefined;
}
