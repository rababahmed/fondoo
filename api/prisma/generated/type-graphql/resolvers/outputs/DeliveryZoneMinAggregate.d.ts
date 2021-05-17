export declare class DeliveryZoneMinAggregate {
    id: string | null;
    createdAt: Date | null;
    zoneTitle: string | null;
    zonePostCode: string | null;
    deliveryFeeType: "Fixed" | "Percent" | null;
    deliveryCharge: number | null;
    minDeliveryAmount: number | null;
    minDeliveryRadius: number | null;
    maxDeliveryRadius: number | null;
    restaurantId: string | null;
}
