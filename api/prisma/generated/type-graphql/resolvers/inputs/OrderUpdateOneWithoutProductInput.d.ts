import { OrderCreateOrConnectWithoutProductInput } from "../inputs/OrderCreateOrConnectWithoutProductInput";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderUpdateWithoutProductInput } from "../inputs/OrderUpdateWithoutProductInput";
import { OrderUpsertWithoutProductInput } from "../inputs/OrderUpsertWithoutProductInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneWithoutProductInput {
    create?: OrderCreateWithoutProductInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | undefined;
    upsert?: OrderUpsertWithoutProductInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: OrderUpdateWithoutProductInput | undefined;
}
