import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerUncheckedCreateWithoutOrdersInput } from "../inputs/CustomerUncheckedCreateWithoutOrdersInput";
import { CustomerUncheckedUpdateWithoutOrdersInput } from "../inputs/CustomerUncheckedUpdateWithoutOrdersInput";
import { CustomerUpsertWithoutOrdersInput } from "../inputs/CustomerUpsertWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutOrdersInput {
    create?: CustomerUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: CustomerUpsertWithoutOrdersInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUncheckedUpdateWithoutOrdersInput | undefined;
}
