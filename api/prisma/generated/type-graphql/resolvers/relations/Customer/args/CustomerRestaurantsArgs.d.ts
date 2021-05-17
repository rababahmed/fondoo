import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
export declare class CustomerRestaurantsArgs {
    where?: RestaurantWhereInput | undefined;
    orderBy?: RestaurantOrderByInput[] | undefined;
    cursor?: RestaurantWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "email" | "restaurantPlanId" | "businessPhone" | "reservationPhone" | "url" | "cuisine" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParkingFacilities" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "createdAt" | "updatedAt"> | undefined;
}
