import { OrderElementCreateManyOrderInputEnvelope } from "../inputs/OrderElementCreateManyOrderInputEnvelope";
import { OrderElementCreateOrConnectWithoutOrderInput } from "../inputs/OrderElementCreateOrConnectWithoutOrderInput";
import { OrderElementCreateWithoutOrderInput } from "../inputs/OrderElementCreateWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";
export declare class OrderElementCreateNestedManyWithoutOrderInput {
    create?: OrderElementCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderElementCreateOrConnectWithoutOrderInput[] | undefined;
    createMany?: OrderElementCreateManyOrderInputEnvelope | undefined;
    connect?: OrderElementWhereUniqueInput[] | undefined;
}
