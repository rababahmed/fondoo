import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
export declare class FindManyRestaurantArgs {
    where?: RestaurantWhereInput | undefined;
    orderBy?: RestaurantOrderByInput[] | undefined;
    cursor?: RestaurantWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "name" | "email" | "businessPhone" | "reservationPhone" | "url" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParking" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isOrdering" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "updatedAt"> | undefined;
}
