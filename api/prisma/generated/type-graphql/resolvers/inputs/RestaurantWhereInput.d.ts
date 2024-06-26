import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeliveryZoneListRelationFilter } from "../inputs/DeliveryZoneListRelationFilter";
import { OrderItemListRelationFilter } from "../inputs/OrderItemListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { ProductCategoryListRelationFilter } from "../inputs/ProductCategoryListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { RestaurantPlanRelationFilter } from "../inputs/RestaurantPlanRelationFilter";
import { ScheduleListRelationFilter } from "../inputs/ScheduleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RestaurantWhereInput {
    AND?: RestaurantWhereInput[] | undefined;
    OR?: RestaurantWhereInput[] | undefined;
    NOT?: RestaurantWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    plan?: RestaurantPlanRelationFilter | undefined;
    restaurantPlanId?: StringNullableFilter | undefined;
    businessPhone?: StringNullableFilter | undefined;
    reservationPhone?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    cuisine?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    postCode?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    currency?: StringNullableFilter | undefined;
    priceRange?: StringNullableFilter | undefined;
    diningStyle?: StringNullableFilter | undefined;
    vat?: StringNullableFilter | undefined;
    serviceCharge?: StringNullableFilter | undefined;
    hasParkingFacilities?: BoolNullableFilter | undefined;
    hasPartyFacilities?: BoolNullableFilter | undefined;
    hasKidsZone?: BoolNullableFilter | undefined;
    isTakeaway?: BoolNullableFilter | undefined;
    isDelivery?: BoolNullableFilter | undefined;
    isReservation?: BoolNullableFilter | undefined;
    isAutoAcceptOrder?: BoolNullableFilter | undefined;
    isAutoAcceptReservation?: BoolNullableFilter | undefined;
    schedules?: ScheduleListRelationFilter | undefined;
    deliveryZones?: DeliveryZoneListRelationFilter | undefined;
    customers?: CustomerListRelationFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
    orderItems?: OrderItemListRelationFilter | undefined;
    productCategory?: ProductCategoryListRelationFilter | undefined;
    products?: ProductListRelationFilter | undefined;
    users?: UserListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
