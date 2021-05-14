import { OrderCreateManyUserInputEnvelope } from "../inputs/OrderCreateManyUserInputEnvelope";
import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutUserInput } from "../inputs/OrderUpdateManyWithWhereWithoutUserInput";
import { OrderUpdateWithWhereUniqueWithoutUserInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutUserInput";
import { OrderUpsertWithWhereUniqueWithoutUserInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutUserInput {
    create?: OrderCreateWithoutUserInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: OrderCreateManyUserInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
