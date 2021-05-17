import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ScheduleScalarWhereInput {
    AND?: ScheduleScalarWhereInput[] | undefined;
    OR?: ScheduleScalarWhereInput[] | undefined;
    NOT?: ScheduleScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    day?: StringNullableFilter | undefined;
    openingTime?: StringNullableFilter | undefined;
    closingTime?: StringNullableFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    deliveryTime?: StringNullableFilter | undefined;
    takeawayTime?: StringNullableFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
