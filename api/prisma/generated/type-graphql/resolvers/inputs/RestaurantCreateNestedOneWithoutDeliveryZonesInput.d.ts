import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantUncheckedCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantUncheckedCreateWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutDeliveryZonesInput {
    create?: RestaurantUncheckedCreateWithoutDeliveryZonesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
