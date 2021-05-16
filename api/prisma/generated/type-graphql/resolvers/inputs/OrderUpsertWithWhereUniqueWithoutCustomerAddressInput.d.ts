import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderUpdateWithoutCustomerAddressInput } from "../inputs/OrderUpdateWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpsertWithWhereUniqueWithoutCustomerAddressInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutCustomerAddressInput;
    create: OrderCreateWithoutCustomerAddressInput;
}
