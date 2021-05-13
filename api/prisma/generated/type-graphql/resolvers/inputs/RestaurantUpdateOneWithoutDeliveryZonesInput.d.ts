import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateWithoutDeliveryZonesInput";
import { RestaurantUpdateWithoutDeliveryZonesInput } from "../inputs/RestaurantUpdateWithoutDeliveryZonesInput";
import { RestaurantUpsertWithoutDeliveryZonesInput } from "../inputs/RestaurantUpsertWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateOneWithoutDeliveryZonesInput {
    create?: RestaurantCreateWithoutDeliveryZonesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;
    upsert?: RestaurantUpsertWithoutDeliveryZonesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: RestaurantUpdateWithoutDeliveryZonesInput | undefined;
}
