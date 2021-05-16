import { OrderCreateManyUserInputEnvelope } from "../inputs/OrderCreateManyUserInputEnvelope";
import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUncheckedCreateNestedManyWithoutUserInput {
    create?: OrderCreateWithoutUserInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: OrderCreateManyUserInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
