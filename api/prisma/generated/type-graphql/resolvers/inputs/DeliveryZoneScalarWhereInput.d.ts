import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryFeeFilter } from "../inputs/EnumDeliveryFeeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DeliveryZoneScalarWhereInput {
    AND?: DeliveryZoneScalarWhereInput[] | undefined;
    OR?: DeliveryZoneScalarWhereInput[] | undefined;
    NOT?: DeliveryZoneScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    zoneTitle?: StringFilter | undefined;
    zonePostCode?: StringNullableFilter | undefined;
    deliveryFeeType?: EnumDeliveryFeeFilter | undefined;
    deliveryCharge?: IntFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    minDeliveryRadius?: IntNullableFilter | undefined;
    maxDeliveryRadius?: IntNullableFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
