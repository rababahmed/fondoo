import { OrderCreateManyCustomerAddressInputEnvelope } from "../inputs/OrderCreateManyCustomerAddressInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerAddressInput } from "../inputs/OrderCreateOrConnectWithoutCustomerAddressInput";
import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCustomerAddressInput } from "../inputs/OrderUpdateManyWithWhereWithoutCustomerAddressInput";
import { OrderUpdateWithWhereUniqueWithoutCustomerAddressInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCustomerAddressInput";
import { OrderUpsertWithWhereUniqueWithoutCustomerAddressInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutCustomerAddressInput {
    create?: OrderCreateWithoutCustomerAddressInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[] | undefined;
    createMany?: OrderCreateManyCustomerAddressInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
