import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneScalarWhereWithAggregatesInput } from "../../../inputs/DeliveryZoneScalarWhereWithAggregatesInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
export declare class GroupByDeliveryZoneArgs {
    where?: DeliveryZoneWhereInput | undefined;
    orderBy?: DeliveryZoneOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "zoneTitle" | "zonePostCode" | "deliveryFeeType" | "deliveryCharge" | "minDeliveryAmount" | "minDeliveryRadius" | "maxDeliveryRadius" | "restaurantId">;
    having?: DeliveryZoneScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
