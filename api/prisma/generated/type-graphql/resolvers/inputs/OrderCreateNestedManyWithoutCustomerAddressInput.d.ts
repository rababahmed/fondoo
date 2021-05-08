import { OrderCreateManyCustomerAddressInputEnvelope } from "../inputs/OrderCreateManyCustomerAddressInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerAddressInput } from "../inputs/OrderCreateOrConnectWithoutCustomerAddressInput";
import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutCustomerAddressInput {
    create?: OrderCreateWithoutCustomerAddressInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput[] | undefined;
    createMany?: OrderCreateManyCustomerAddressInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
