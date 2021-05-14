import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";
export declare class FindFirstDeliveryZoneArgs {
    where?: DeliveryZoneWhereInput | undefined;
    orderBy?: DeliveryZoneOrderByInput[] | undefined;
    cursor?: DeliveryZoneWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "zoneTitle" | "zonePostCode" | "deliveryFeeType" | "deliveryCharge" | "minDeliveryAmount" | "minDeliveryRadius" | "maxDeliveryRadius" | "restaurantId"> | undefined;
}
