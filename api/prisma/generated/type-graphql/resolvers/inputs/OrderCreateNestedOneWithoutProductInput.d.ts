import { OrderCreateOrConnectWithoutProductInput } from "../inputs/OrderCreateOrConnectWithoutProductInput";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutProductInput {
    create?: OrderCreateWithoutProductInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
