import { CartElementCreateManyProductInputEnvelope } from "../inputs/CartElementCreateManyProductInputEnvelope";
import { CartElementCreateOrConnectWithoutProductInput } from "../inputs/CartElementCreateOrConnectWithoutProductInput";
import { CartElementCreateWithoutProductInput } from "../inputs/CartElementCreateWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";
export declare class CartElementCreateNestedManyWithoutProductInput {
    create?: CartElementCreateWithoutProductInput[] | undefined;
    connectOrCreate?: CartElementCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: CartElementCreateManyProductInputEnvelope | undefined;
    connect?: CartElementWhereUniqueInput[] | undefined;
}
