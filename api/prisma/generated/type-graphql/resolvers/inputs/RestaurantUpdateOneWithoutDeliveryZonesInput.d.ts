import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantUncheckedCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantUncheckedCreateWithoutDeliveryZonesInput";
import { RestaurantUncheckedUpdateWithoutDeliveryZonesInput } from "../inputs/RestaurantUncheckedUpdateWithoutDeliveryZonesInput";
import { RestaurantUpsertWithoutDeliveryZonesInput } from "../inputs/RestaurantUpsertWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutDeliveryZonesInput {
    create?: RestaurantUncheckedCreateWithoutDeliveryZonesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;
    upsert?: RestaurantUpsertWithoutDeliveryZonesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUncheckedUpdateWithoutDeliveryZonesInput | undefined;
}
