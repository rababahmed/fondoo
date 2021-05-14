import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";
export declare class AggregateDeliveryZoneArgs {
    where?: DeliveryZoneWhereInput | undefined;
    orderBy?: DeliveryZoneOrderByInput[] | undefined;
    cursor?: DeliveryZoneWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
