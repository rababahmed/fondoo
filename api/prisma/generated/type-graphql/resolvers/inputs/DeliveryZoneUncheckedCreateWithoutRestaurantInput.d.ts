export declare class DeliveryZoneUncheckedCreateWithoutRestaurantInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    zoneTitle: string;
    zonePostCode?: string | undefined;
    deliveryFeeType?: "Fixed" | "Percent" | undefined;
    deliveryCharge?: number | undefined;
    minDeliveryAmount?: number | undefined;
    minDeliveryRadius?: number | undefined;
    maxDeliveryRadius?: number | undefined;
}
