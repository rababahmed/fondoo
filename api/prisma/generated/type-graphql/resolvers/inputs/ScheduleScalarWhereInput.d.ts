import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ScheduleScalarWhereInput {
    AND?: ScheduleScalarWhereInput[] | undefined;
    OR?: ScheduleScalarWhereInput[] | undefined;
    NOT?: ScheduleScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    openingTime?: StringNullableFilter | undefined;
    closingTime?: StringNullableFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    deliveryTime?: StringNullableFilter | undefined;
    takeawayTime?: StringNullableFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
