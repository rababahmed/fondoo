import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DeliveryZoneUpdateManyWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateManyWithoutRestaurantInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutRestaurantInput } from "../inputs/OrderUpdateManyWithoutRestaurantInput";
import { ProductCategoryUpdateManyWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateManyWithoutRestaurantsInput";
import { ProductUpdateManyWithoutRestaurantInput } from "../inputs/ProductUpdateManyWithoutRestaurantInput";
import { ScheduleUpdateManyWithoutRestaurantInput } from "../inputs/ScheduleUpdateManyWithoutRestaurantInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRestaurantsInput } from "../inputs/UserUpdateManyWithoutRestaurantsInput";
export declare class RestaurantUpdateWithoutCustomersInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    businessPhone?: NullableStringFieldUpdateOperationsInput | undefined;
    reservationPhone?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    postCode?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    currency?: NullableStringFieldUpdateOperationsInput | undefined;
    priceRange?: NullableStringFieldUpdateOperationsInput | undefined;
    diningStyle?: NullableStringFieldUpdateOperationsInput | undefined;
    vat?: NullableStringFieldUpdateOperationsInput | undefined;
    serviceCharge?: NullableStringFieldUpdateOperationsInput | undefined;
    hasParking?: NullableBoolFieldUpdateOperationsInput | undefined;
    hasPartyFacilities?: NullableBoolFieldUpdateOperationsInput | undefined;
    hasKidsZone?: NullableBoolFieldUpdateOperationsInput | undefined;
    isTakeaway?: NullableBoolFieldUpdateOperationsInput | undefined;
    isDelivery?: NullableBoolFieldUpdateOperationsInput | undefined;
    isReservation?: NullableBoolFieldUpdateOperationsInput | undefined;
    isOrdering?: NullableBoolFieldUpdateOperationsInput | undefined;
    isAutoAcceptOrder?: NullableBoolFieldUpdateOperationsInput | undefined;
    isAutoAcceptReservation?: NullableBoolFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    products?: ProductUpdateManyWithoutRestaurantInput | undefined;
    schedule?: ScheduleUpdateManyWithoutRestaurantInput | undefined;
    deliveryZones?: DeliveryZoneUpdateManyWithoutRestaurantInput | undefined;
    orders?: OrderUpdateManyWithoutRestaurantInput | undefined;
    productCategory?: ProductCategoryUpdateManyWithoutRestaurantsInput | undefined;
    users?: UserUpdateManyWithoutRestaurantsInput | undefined;
}
