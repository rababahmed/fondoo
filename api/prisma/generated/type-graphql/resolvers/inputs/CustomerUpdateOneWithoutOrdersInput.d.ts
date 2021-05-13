import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerCreateWithoutOrdersInput } from "../inputs/CustomerCreateWithoutOrdersInput";
import { CustomerUpdateWithoutOrdersInput } from "../inputs/CustomerUpdateWithoutOrdersInput";
import { CustomerUpsertWithoutOrdersInput } from "../inputs/CustomerUpsertWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutOrdersInput {
    create?: CustomerCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: CustomerUpsertWithoutOrdersInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUpdateWithoutOrdersInput | undefined;
}
