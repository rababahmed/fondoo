import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ScheduleScalarWhereWithAggregatesInput {
    AND?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    OR?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ScheduleScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    openingTime?: StringNullableWithAggregatesFilter | undefined;
    closingTime?: StringNullableWithAggregatesFilter | undefined;
    minDeliveryAmount?: IntNullableWithAggregatesFilter | undefined;
    deliveryTime?: StringNullableWithAggregatesFilter | undefined;
    takeawayTime?: StringNullableWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
