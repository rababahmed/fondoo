import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderUpdateWithoutCustomerInput } from "../inputs/OrderUpdateWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpsertWithWhereUniqueWithoutCustomerInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutCustomerInput;
    create: OrderCreateWithoutCustomerInput;
}
