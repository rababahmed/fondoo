import { OrderItemCreateManyOrderInputEnvelope } from "../inputs/OrderItemCreateManyOrderInputEnvelope";
import { OrderItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderItemCreateOrConnectWithoutOrderInput";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemCreateNestedManyWithoutOrderInput {
    create?: OrderItemCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput[] | undefined;
    createMany?: OrderItemCreateManyOrderInputEnvelope | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
}
