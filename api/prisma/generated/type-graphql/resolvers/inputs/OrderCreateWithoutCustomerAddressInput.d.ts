import { Prisma } from "@prisma/client";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerAddressInput {
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
    Customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
}
