import { OrderElementCreateManyOrderInputEnvelope } from "../inputs/OrderElementCreateManyOrderInputEnvelope";
import { OrderElementCreateOrConnectWithoutOrderInput } from "../inputs/OrderElementCreateOrConnectWithoutOrderInput";
import { OrderElementCreateWithoutOrderInput } from "../inputs/OrderElementCreateWithoutOrderInput";
import { OrderElementScalarWhereInput } from "../inputs/OrderElementScalarWhereInput";
import { OrderElementUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithWhereWithoutOrderInput";
import { OrderElementUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderElementUpdateWithWhereUniqueWithoutOrderInput";
import { OrderElementUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderElementUpsertWithWhereUniqueWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";
export declare class OrderElementUpdateManyWithoutOrderInput {
    create?: OrderElementCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderElementCreateOrConnectWithoutOrderInput[] | undefined;
    upsert?: OrderElementUpsertWithWhereUniqueWithoutOrderInput[] | undefined;
    createMany?: OrderElementCreateManyOrderInputEnvelope | undefined;
    connect?: OrderElementWhereUniqueInput[] | undefined;
    set?: OrderElementWhereUniqueInput[] | undefined;
    disconnect?: OrderElementWhereUniqueInput[] | undefined;
    delete?: OrderElementWhereUniqueInput[] | undefined;
    update?: OrderElementUpdateWithWhereUniqueWithoutOrderInput[] | undefined;
    updateMany?: OrderElementUpdateManyWithWhereWithoutOrderInput[] | undefined;
    deleteMany?: OrderElementScalarWhereInput[] | undefined;
}
