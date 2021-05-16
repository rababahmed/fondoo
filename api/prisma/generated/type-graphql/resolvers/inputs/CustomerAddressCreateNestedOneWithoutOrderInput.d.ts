import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressCreateNestedOneWithoutOrderInput {
    create?: CustomerAddressCreateWithoutOrderInput | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;
    connect?: CustomerAddressWhereUniqueInput | undefined;
}
