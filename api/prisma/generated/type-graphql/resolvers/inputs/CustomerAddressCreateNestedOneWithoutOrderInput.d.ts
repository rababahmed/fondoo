import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressUncheckedCreateWithoutOrderInput } from "../inputs/CustomerAddressUncheckedCreateWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressCreateNestedOneWithoutOrderInput {
    create?: CustomerAddressUncheckedCreateWithoutOrderInput | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;
    connect?: CustomerAddressWhereUniqueInput | undefined;
}
