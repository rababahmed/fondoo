import { CustomerAddressCreateManyCustomerInputEnvelope } from "../inputs/CustomerAddressCreateManyCustomerInputEnvelope";
import { CustomerAddressCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerAddressCreateOrConnectWithoutCustomerInput";
import { CustomerAddressCreateWithoutCustomerInput } from "../inputs/CustomerAddressCreateWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";
export declare class CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput {
    create?: CustomerAddressCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput[] | undefined;
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope | undefined;
    connect?: CustomerAddressWhereUniqueInput[] | undefined;
}
