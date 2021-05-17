import { CustomerCreateNestedManyWithoutRestaurantsInput } from "../inputs/CustomerCreateNestedManyWithoutRestaurantsInput";
import { DeliveryZoneCreateNestedManyWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateNestedManyWithoutRestaurantInput";
import { OrderCreateNestedManyWithoutRestaurantInput } from "../inputs/OrderCreateNestedManyWithoutRestaurantInput";
import { OrderItemCreateNestedManyWithoutRestaurantInput } from "../inputs/OrderItemCreateNestedManyWithoutRestaurantInput";
import { ProductCategoryCreateNestedManyWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateNestedManyWithoutRestaurantsInput";
import { ProductCreateNestedManyWithoutRestaurantInput } from "../inputs/ProductCreateNestedManyWithoutRestaurantInput";
import { RestaurantPlanCreateNestedOneWithoutRestaurantsInput } from "../inputs/RestaurantPlanCreateNestedOneWithoutRestaurantsInput";
import { ScheduleCreateNestedManyWithoutRestaurantInput } from "../inputs/ScheduleCreateNestedManyWithoutRestaurantInput";
import { UserCreateNestedManyWithoutRestaurantsInput } from "../inputs/UserCreateNestedManyWithoutRestaurantsInput";
export declare class RestaurantCreateInput {
    id?: string | undefined;
    name: string;
    email: string;
    businessPhone?: string | undefined;
    reservationPhone?: string | undefined;
    url?: string | undefined;
    cuisine?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    country?: string | undefined;
    currency?: string | undefined;
    priceRange?: string | undefined;
    diningStyle?: string | undefined;
    vat?: string | undefined;
    serviceCharge?: string | undefined;
    hasParkingFacilities?: boolean | undefined;
    hasPartyFacilities?: boolean | undefined;
    hasKidsZone?: boolean | undefined;
    isTakeaway?: boolean | undefined;
    isDelivery?: boolean | undefined;
    isReservation?: boolean | undefined;
    isAutoAcceptOrder?: boolean | undefined;
    isAutoAcceptReservation?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    plan?: RestaurantPlanCreateNestedOneWithoutRestaurantsInput | undefined;
    schedules?: ScheduleCreateNestedManyWithoutRestaurantInput | undefined;
    deliveryZones?: DeliveryZoneCreateNestedManyWithoutRestaurantInput | undefined;
    customers?: CustomerCreateNestedManyWithoutRestaurantsInput | undefined;
    orders?: OrderCreateNestedManyWithoutRestaurantInput | undefined;
    orderItems?: OrderItemCreateNestedManyWithoutRestaurantInput | undefined;
    productCategory?: ProductCategoryCreateNestedManyWithoutRestaurantsInput | undefined;
    products?: ProductCreateNestedManyWithoutRestaurantInput | undefined;
    users?: UserCreateNestedManyWithoutRestaurantsInput | undefined;
}
