export declare class DeliveryZoneCreateManyRestaurantInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    zoneTitle: string;
    zonePostCode?: string | undefined;
    deliveryFeeType?: "Fixed" | "Percent" | undefined;
    deliveryCharge?: number | undefined;
    minDeliveryAmount?: number | undefined;
    minDeliveryRadius?: number | undefined;
    maxDeliveryRadius?: number | undefined;
}
