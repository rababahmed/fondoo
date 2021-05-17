import { DeliveryZoneAvgAggregate } from "../outputs/DeliveryZoneAvgAggregate";
import { DeliveryZoneCountAggregate } from "../outputs/DeliveryZoneCountAggregate";
import { DeliveryZoneMaxAggregate } from "../outputs/DeliveryZoneMaxAggregate";
import { DeliveryZoneMinAggregate } from "../outputs/DeliveryZoneMinAggregate";
import { DeliveryZoneSumAggregate } from "../outputs/DeliveryZoneSumAggregate";
export declare class DeliveryZoneGroupBy {
    id: string;
    createdAt: Date;
    zoneTitle: string;
    zonePostCode: string | null;
    deliveryFeeType: "Fixed" | "Percent";
    deliveryCharge: number;
    minDeliveryAmount: number | null;
    minDeliveryRadius: number | null;
    maxDeliveryRadius: number | null;
    restaurantId: string | null;
    count: DeliveryZoneCountAggregate | null;
    avg: DeliveryZoneAvgAggregate | null;
    sum: DeliveryZoneSumAggregate | null;
    min: DeliveryZoneMinAggregate | null;
    max: DeliveryZoneMaxAggregate | null;
}
