import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerUncheckedCreateWithoutOrdersInput } from "../inputs/CustomerUncheckedCreateWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutOrdersInput {
    create?: CustomerUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
