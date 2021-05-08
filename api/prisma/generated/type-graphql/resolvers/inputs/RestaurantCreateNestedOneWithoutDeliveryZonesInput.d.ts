import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedOneWithoutDeliveryZonesInput {
    create?: RestaurantCreateWithoutDeliveryZonesInput | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;
    connect?: RestaurantWhereUniqueInput | undefined;
}
