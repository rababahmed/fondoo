import { OrderCreateOrConnectWithoutItemsInput } from "../inputs/OrderCreateOrConnectWithoutItemsInput";
import { OrderCreateWithoutItemsInput } from "../inputs/OrderCreateWithoutItemsInput";
import { OrderUpdateWithoutItemsInput } from "../inputs/OrderUpdateWithoutItemsInput";
import { OrderUpsertWithoutItemsInput } from "../inputs/OrderUpsertWithoutItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneWithoutItemsInput {
    create?: OrderCreateWithoutItemsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | undefined;
    upsert?: OrderUpsertWithoutItemsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: OrderUpdateWithoutItemsInput | undefined;
}
