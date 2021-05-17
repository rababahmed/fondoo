import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ScheduleScalarWhereWithAggregatesInput {
    AND?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    OR?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    day?: StringNullableWithAggregatesFilter | undefined;
    openingTime?: StringNullableWithAggregatesFilter | undefined;
    closingTime?: StringNullableWithAggregatesFilter | undefined;
    minDeliveryAmount?: IntNullableWithAggregatesFilter | undefined;
    deliveryTime?: StringNullableWithAggregatesFilter | undefined;
    takeawayTime?: StringNullableWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
