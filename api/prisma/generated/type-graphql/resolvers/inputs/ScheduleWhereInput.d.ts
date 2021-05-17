import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ScheduleWhereInput {
    AND?: ScheduleWhereInput[] | undefined;
    OR?: ScheduleWhereInput[] | undefined;
    NOT?: ScheduleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    day?: StringNullableFilter | undefined;
    openingTime?: StringNullableFilter | undefined;
    closingTime?: StringNullableFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    deliveryTime?: StringNullableFilter | undefined;
    takeawayTime?: StringNullableFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
