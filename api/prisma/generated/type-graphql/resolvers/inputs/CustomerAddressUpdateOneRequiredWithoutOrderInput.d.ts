import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressUpdateWithoutOrderInput } from "../inputs/CustomerAddressUpdateWithoutOrderInput";
import { CustomerAddressUpsertWithoutOrderInput } from "../inputs/CustomerAddressUpsertWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressUpdateOneRequiredWithoutOrderInput {
    create?: CustomerAddressCreateWithoutOrderInput | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;
    upsert?: CustomerAddressUpsertWithoutOrderInput | undefined;
    connect?: CustomerAddressWhereUniqueInput | undefined;
    update?: CustomerAddressUpdateWithoutOrderInput | undefined;
}
