import { OrderItemCreateManyRestaurantInputEnvelope } from "../inputs/OrderItemCreateManyRestaurantInputEnvelope";
import { OrderItemCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderItemCreateOrConnectWithoutRestaurantInput";
import { OrderItemCreateWithoutRestaurantInput } from "../inputs/OrderItemCreateWithoutRestaurantInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/OrderItemUpdateManyWithWhereWithoutRestaurantInput";
import { OrderItemUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutRestaurantInput";
import { OrderItemUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutRestaurantInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemUpdateManyWithoutRestaurantInput {
    create?: OrderItemCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: OrderItemUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: OrderItemCreateManyRestaurantInputEnvelope | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
    set?: OrderItemWhereUniqueInput[] | undefined;
    disconnect?: OrderItemWhereUniqueInput[] | undefined;
    delete?: OrderItemWhereUniqueInput[] | undefined;
    update?: OrderItemUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: OrderItemUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: OrderItemScalarWhereInput[] | undefined;
}
