import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerCreateWithoutOrdersInput } from "../inputs/CustomerCreateWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutOrdersInput {
    create?: CustomerCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
