import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDeliveryFeeWithAggregatesFilter } from "../inputs/EnumDeliveryFeeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DeliveryZoneScalarWhereWithAggregatesInput {
    AND?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;
    OR?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    zoneTitle?: StringWithAggregatesFilter | undefined;
    zonePostCode?: StringNullableWithAggregatesFilter | undefined;
    deliveryFeeType?: EnumDeliveryFeeWithAggregatesFilter | undefined;
    deliveryCharge?: IntWithAggregatesFilter | undefined;
    minDeliveryAmount?: IntNullableWithAggregatesFilter | undefined;
    minDeliveryRadius?: IntNullableWithAggregatesFilter | undefined;
    maxDeliveryRadius?: IntNullableWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
