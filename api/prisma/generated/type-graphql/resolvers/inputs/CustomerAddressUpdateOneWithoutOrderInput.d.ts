import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressUpdateWithoutOrderInput } from "../inputs/CustomerAddressUpdateWithoutOrderInput";
import { CustomerAddressUpsertWithoutOrderInput } from "../inputs/CustomerAddressUpsertWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressUpdateOneWithoutOrderInput {
    create?: CustomerAddressCreateWithoutOrderInput | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;
    upsert?: CustomerAddressUpsertWithoutOrderInput | undefined;
    connect?: CustomerAddressWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerAddressUpdateWithoutOrderInput | undefined;
}
