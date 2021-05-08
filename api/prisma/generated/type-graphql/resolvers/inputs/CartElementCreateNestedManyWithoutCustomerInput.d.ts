import { CartElementCreateManyCustomerInputEnvelope } from "../inputs/CartElementCreateManyCustomerInputEnvelope";
import { CartElementCreateOrConnectWithoutCustomerInput } from "../inputs/CartElementCreateOrConnectWithoutCustomerInput";
import { CartElementCreateWithoutCustomerInput } from "../inputs/CartElementCreateWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";
export declare class CartElementCreateNestedManyWithoutCustomerInput {
    create?: CartElementCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CartElementCreateOrConnectWithoutCustomerInput[] | undefined;
    createMany?: CartElementCreateManyCustomerInputEnvelope | undefined;
    connect?: CartElementWhereUniqueInput[] | undefined;
}
