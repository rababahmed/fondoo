import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ScheduleWhereInput {
    AND?: ScheduleWhereInput[] | undefined;
    OR?: ScheduleWhereInput[] | undefined;
    NOT?: ScheduleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    openingTime?: StringNullableFilter | undefined;
    closingTime?: StringNullableFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    deliveryTime?: StringNullableFilter | undefined;
    takeawayTime?: StringNullableFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
