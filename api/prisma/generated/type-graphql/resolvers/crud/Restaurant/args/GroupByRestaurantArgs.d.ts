import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantScalarWhereWithAggregatesInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
export declare class GroupByRestaurantArgs {
    where?: RestaurantWhereInput | undefined;
    orderBy?: RestaurantOrderByInput[] | undefined;
    by: Array<"id" | "name" | "email" | "restaurantPlanId" | "businessPhone" | "reservationPhone" | "url" | "cuisine" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParkingFacilities" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "createdAt" | "updatedAt">;
    having?: RestaurantScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
