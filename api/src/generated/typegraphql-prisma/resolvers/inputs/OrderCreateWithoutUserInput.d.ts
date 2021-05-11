import { Prisma } from "@prisma/client";
import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutUserInput {
    items: Prisma.InputJsonValue;
    coupon?: string | undefined;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
    Customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
    CustomerAddress?: CustomerAddressCreateNestedOneWithoutOrderInput | undefined;
}
