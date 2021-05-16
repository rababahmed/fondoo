import { DeliveryZoneCreateManyRestaurantInputEnvelope } from "../inputs/DeliveryZoneCreateManyRestaurantInputEnvelope";
import { DeliveryZoneCreateOrConnectWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateOrConnectWithoutRestaurantInput";
import { DeliveryZoneCreateWithoutRestaurantInput } from "../inputs/DeliveryZoneCreateWithoutRestaurantInput";
import { DeliveryZoneScalarWhereInput } from "../inputs/DeliveryZoneScalarWhereInput";
import { DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput";
import { DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput";
import { DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput";
import { DeliveryZoneWhereUniqueInput } from "../inputs/DeliveryZoneWhereUniqueInput";
export declare class DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput {
    create?: DeliveryZoneCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: DeliveryZoneCreateManyRestaurantInputEnvelope | undefined;
    connect?: DeliveryZoneWhereUniqueInput[] | undefined;
    set?: DeliveryZoneWhereUniqueInput[] | undefined;
    disconnect?: DeliveryZoneWhereUniqueInput[] | undefined;
    delete?: DeliveryZoneWhereUniqueInput[] | undefined;
    update?: DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: DeliveryZoneScalarWhereInput[] | undefined;
}
