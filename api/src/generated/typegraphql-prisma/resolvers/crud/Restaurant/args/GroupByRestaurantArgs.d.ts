import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantScalarWhereWithAggregatesInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
export declare class GroupByRestaurantArgs {
    where?: RestaurantWhereInput | undefined;
    orderBy?: RestaurantOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "name" | "email" | "businessPhone" | "reservationPhone" | "url" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParking" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isOrdering" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "updatedAt">;
    having?: RestaurantScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
