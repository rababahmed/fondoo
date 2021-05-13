import { DeliveryZoneCreateNestedManyWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateNestedManyWithoutRestaurantInput";
import { OrderCreateNestedManyWithoutRestaurantInput } from "../inputs/OrderCreateNestedManyWithoutRestaurantInput";
import { ProductCategoryCreateNestedManyWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateNestedManyWithoutRestaurantsInput";
import { ProductCreateNestedManyWithoutRestaurantInput } from "../inputs/ProductCreateNestedManyWithoutRestaurantInput";
import { ScheduleCreateNestedManyWithoutRestaurantInput } from "../inputs/ScheduleCreateNestedManyWithoutRestaurantInput";
import { UserCreateNestedManyWithoutRestaurantInput } from "../inputs/UserCreateNestedManyWithoutRestaurantInput";
export declare class RestaurantCreateWithoutCustomersInput {
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
    schedule?: ScheduleCreateNestedManyWithoutRestaurantInput | undefined;
    deliveryZones?: DeliveryZoneCreateNestedManyWithoutRestaurantInput | undefined;
    orders?: OrderCreateNestedManyWithoutRestaurantInput | undefined;
    productCategory?: ProductCategoryCreateNestedManyWithoutRestaurantsInput | undefined;
    products?: ProductCreateNestedManyWithoutRestaurantInput | undefined;
    users?: UserCreateNestedManyWithoutRestaurantInput | undefined;
}
