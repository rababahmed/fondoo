import { OrderItemCreateManyProductInputEnvelope } from "../inputs/OrderItemCreateManyProductInputEnvelope";
import { OrderItemCreateOrConnectWithoutProductInput } from "../inputs/OrderItemCreateOrConnectWithoutProductInput";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemCreateNestedManyWithoutProductInput {
    create?: OrderItemCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: OrderItemCreateManyProductInputEnvelope | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
}
