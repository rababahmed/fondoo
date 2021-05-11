import { OrderCreateManyRestaurantInputEnvelope } from "../inputs/OrderCreateManyRestaurantInputEnvelope";
import { OrderCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderCreateOrConnectWithoutRestaurantInput";
import { OrderCreateWithoutRestaurantInput } from "../inputs/OrderCreateWithoutRestaurantInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/OrderUpdateManyWithWhereWithoutRestaurantInput";
import { OrderUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutRestaurantInput";
import { OrderUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutRestaurantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutRestaurantInput {
    create?: OrderCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: OrderCreateManyRestaurantInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
