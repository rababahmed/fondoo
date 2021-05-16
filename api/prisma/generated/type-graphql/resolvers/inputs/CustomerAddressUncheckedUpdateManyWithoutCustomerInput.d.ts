import { CustomerAddressCreateManyCustomerInputEnvelope } from "../inputs/CustomerAddressCreateManyCustomerInputEnvelope";
import { CustomerAddressCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerAddressCreateOrConnectWithoutCustomerInput";
import { CustomerAddressCreateWithoutCustomerInput } from "../inputs/CustomerAddressCreateWithoutCustomerInput";
import { CustomerAddressScalarWhereInput } from "../inputs/CustomerAddressScalarWhereInput";
import { CustomerAddressUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CustomerAddressUpdateManyWithWhereWithoutCustomerInput";
import { CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput";
import { CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressUncheckedUpdateManyWithoutCustomerInput {
    create?: CustomerAddressCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput[] | undefined;
    upsert?: CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope | undefined;
    connect?: CustomerAddressWhereUniqueInput[] | undefined;
    set?: CustomerAddressWhereUniqueInput[] | undefined;
    disconnect?: CustomerAddressWhereUniqueInput[] | undefined;
    delete?: CustomerAddressWhereUniqueInput[] | undefined;
    update?: CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;
    updateMany?: CustomerAddressUpdateManyWithWhereWithoutCustomerInput[] | undefined;
    deleteMany?: CustomerAddressScalarWhereInput[] | undefined;
}
