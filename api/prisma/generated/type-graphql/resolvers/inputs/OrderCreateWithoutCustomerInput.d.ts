import { Prisma } from "@prisma/client";
import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerInput {
    items: Prisma.InputJsonValue;
    coupon?: string | undefined;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutOrdersInput;
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
    CustomerAddress?: CustomerAddressCreateNestedOneWithoutOrderInput | undefined;
}
