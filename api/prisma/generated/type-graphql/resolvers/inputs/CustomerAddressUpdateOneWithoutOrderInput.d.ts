import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressUncheckedCreateWithoutOrderInput } from "../inputs/CustomerAddressUncheckedCreateWithoutOrderInput";
import { CustomerAddressUncheckedUpdateWithoutOrderInput } from "../inputs/CustomerAddressUncheckedUpdateWithoutOrderInput";
import { CustomerAddressUpsertWithoutOrderInput } from "../inputs/CustomerAddressUpsertWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressUpdateOneWithoutOrderInput {
    create?: CustomerAddressUncheckedCreateWithoutOrderInput | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;
    upsert?: CustomerAddressUpsertWithoutOrderInput | undefined;
    connect?: CustomerAddressWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerAddressUncheckedUpdateWithoutOrderInput | undefined;
}
