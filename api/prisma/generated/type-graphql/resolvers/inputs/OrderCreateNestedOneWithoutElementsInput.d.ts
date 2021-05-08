import { OrderCreateOrConnectWithoutElementsInput } from "../inputs/OrderCreateOrConnectWithoutElementsInput";
import { OrderCreateWithoutElementsInput } from "../inputs/OrderCreateWithoutElementsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutElementsInput {
    create?: OrderCreateWithoutElementsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutElementsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
