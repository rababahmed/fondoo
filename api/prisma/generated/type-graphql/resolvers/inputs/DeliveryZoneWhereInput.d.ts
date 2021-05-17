import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryFeeFilter } from "../inputs/EnumDeliveryFeeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DeliveryZoneWhereInput {
    AND?: DeliveryZoneWhereInput[] | undefined;
    OR?: DeliveryZoneWhereInput[] | undefined;
    NOT?: DeliveryZoneWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    zoneTitle?: StringFilter | undefined;
    zonePostCode?: StringNullableFilter | undefined;
    deliveryFeeType?: EnumDeliveryFeeFilter | undefined;
    deliveryCharge?: IntFilter | undefined;
    minDeliveryAmount?: IntNullableFilter | undefined;
    minDeliveryRadius?: IntNullableFilter | undefined;
    maxDeliveryRadius?: IntNullableFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
