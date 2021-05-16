import { DeliveryZoneCreateManyRestaurantInputEnvelope } from "../inputs/DeliveryZoneCreateManyRestaurantInputEnvelope";
import { DeliveryZoneCreateOrConnectWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateOrConnectWithoutRestaurantInput";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";
export declare class DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput {
    create?: DeliveryZoneCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: DeliveryZoneCreateManyRestaurantInputEnvelope | undefined;
    connect?: DeliveryZoneWhereUniqueInput[] | undefined;
}
