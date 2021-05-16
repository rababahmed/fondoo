import { CustomerUncheckedCreateNestedManyWithoutRestaurantInput } from "../inputs/CustomerUncheckedCreateNestedManyWithoutRestaurantInput";
import { DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput } from "../inputs/DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput";
import { OrderUncheckedCreateNestedManyWithoutRestaurantInput } from "../inputs/OrderUncheckedCreateNestedManyWithoutRestaurantInput";
import { ProductCategoryUncheckedCreateNestedManyWithoutRestaurantsInput } from "../inputs/ProductCategoryUncheckedCreateNestedManyWithoutRestaurantsInput";
import { ProductUncheckedCreateNestedManyWithoutRestaurantInput } from "../inputs/ProductUncheckedCreateNestedManyWithoutRestaurantInput";
import { UserUncheckedCreateNestedManyWithoutRestaurantInput } from "../inputs/UserUncheckedCreateNestedManyWithoutRestaurantInput";
export declare class RestaurantUncheckedCreateWithoutScheduleInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    email: string;
    businessPhone?: string | undefined;
    reservationPhone?: string | undefined;
    url?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    country?: string | undefined;
    currency?: string | undefined;
    priceRange?: string | undefined;
    diningStyle?: string | undefined;
    vat?: string | undefined;
    serviceCharge?: string | undefined;
    hasParking?: boolean | undefined;
    hasPartyFacilities?: boolean | undefined;
    hasKidsZone?: boolean | undefined;
    isTakeaway?: boolean | undefined;
    isDelivery?: boolean | undefined;
    isReservation?: boolean | undefined;
    isOrdering?: boolean | undefined;
    isAutoAcceptOrder?: boolean | undefined;
    isAutoAcceptReservation?: boolean | undefined;
    updatedAt?: Date | undefined;
    deliveryZones?: DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput | undefined;
    customers?: CustomerUncheckedCreateNestedManyWithoutRestaurantInput | undefined;
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput | undefined;
    productCategory?: ProductCategoryUncheckedCreateNestedManyWithoutRestaurantsInput | undefined;
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput | undefined;
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput | undefined;
}
