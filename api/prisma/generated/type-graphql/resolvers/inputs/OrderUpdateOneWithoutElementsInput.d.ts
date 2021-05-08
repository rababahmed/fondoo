import { OrderCreateOrConnectWithoutElementsInput } from "../inputs/OrderCreateOrConnectWithoutElementsInput";
import { OrderCreateWithoutElementsInput } from "../inputs/OrderCreateWithoutElementsInput";
import { OrderUpdateWithoutElementsInput } from "../inputs/OrderUpdateWithoutElementsInput";
import { OrderUpsertWithoutElementsInput } from "../inputs/OrderUpsertWithoutElementsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneWithoutElementsInput {
    create?: OrderCreateWithoutElementsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutElementsInput | undefined;
    upsert?: OrderUpsertWithoutElementsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: OrderUpdateWithoutElementsInput | undefined;
}
