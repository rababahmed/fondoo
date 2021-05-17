import { OrderCreateOrConnectWithoutItemsInput } from "../inputs/OrderCreateOrConnectWithoutItemsInput";
import { OrderCreateWithoutItemsInput } from "../inputs/OrderCreateWithoutItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutItemsInput {
    create?: OrderCreateWithoutItemsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
