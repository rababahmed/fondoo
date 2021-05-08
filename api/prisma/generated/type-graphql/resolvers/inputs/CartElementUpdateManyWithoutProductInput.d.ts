import { CartElementCreateManyProductInputEnvelope } from "../inputs/CartElementCreateManyProductInputEnvelope";
import { CartElementCreateOrConnectWithoutProductInput } from "../inputs/CartElementCreateOrConnectWithoutProductInput";
import { CartElementCreateWithoutProductInput } from "../inputs/CartElementCreateWithoutProductInput";
import { CartElementScalarWhereInput } from "../inputs/CartElementScalarWhereInput";
import { CartElementUpdateManyWithWhereWithoutProductInput } from "../inputs/CartElementUpdateManyWithWhereWithoutProductInput";
import { CartElementUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CartElementUpdateWithWhereUniqueWithoutProductInput";
import { CartElementUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CartElementUpsertWithWhereUniqueWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";
export declare class CartElementUpdateManyWithoutProductInput {
    create?: CartElementCreateWithoutProductInput[] | undefined;
    connectOrCreate?: CartElementCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: CartElementUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: CartElementCreateManyProductInputEnvelope | undefined;
    connect?: CartElementWhereUniqueInput[] | undefined;
    set?: CartElementWhereUniqueInput[] | undefined;
    disconnect?: CartElementWhereUniqueInput[] | undefined;
    delete?: CartElementWhereUniqueInput[] | undefined;
    update?: CartElementUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: CartElementUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: CartElementScalarWhereInput[] | undefined;
}
