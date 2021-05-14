import { DeliveryZoneAvgAggregate } from "../outputs/DeliveryZoneAvgAggregate";
import { DeliveryZoneCountAggregate } from "../outputs/DeliveryZoneCountAggregate";
import { DeliveryZoneMaxAggregate } from "../outputs/DeliveryZoneMaxAggregate";
import { DeliveryZoneMinAggregate } from "../outputs/DeliveryZoneMinAggregate";
import { DeliveryZoneSumAggregate } from "../outputs/DeliveryZoneSumAggregate";
export declare class AggregateDeliveryZone {
    count: DeliveryZoneCountAggregate | null;
    avg: DeliveryZoneAvgAggregate | null;
    sum: DeliveryZoneSumAggregate | null;
    min: DeliveryZoneMinAggregate | null;
    max: DeliveryZoneMaxAggregate | null;
}
