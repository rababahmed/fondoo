import { OrderItemCreateManyProductInputEnvelope } from "../inputs/OrderItemCreateManyProductInputEnvelope";
import { OrderItemCreateOrConnectWithoutProductInput } from "../inputs/OrderItemCreateOrConnectWithoutProductInput";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereWithoutProductInput } from "../inputs/OrderItemUpdateManyWithWhereWithoutProductInput";
import { OrderItemUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutProductInput";
import { OrderItemUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemUpdateManyWithoutProductInput {
    create?: OrderItemCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: OrderItemCreateManyProductInputEnvelope | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
    set?: OrderItemWhereUniqueInput[] | undefined;
    disconnect?: OrderItemWhereUniqueInput[] | undefined;
    delete?: OrderItemWhereUniqueInput[] | undefined;
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: OrderItemScalarWhereInput[] | undefined;
}
