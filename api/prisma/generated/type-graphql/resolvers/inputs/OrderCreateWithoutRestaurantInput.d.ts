import { CouponCreateNestedOneWithoutOrdersInput } from "../inputs/CouponCreateNestedOneWithoutOrdersInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderItemCreateNestedManyWithoutOrderInput";
export declare class OrderCreateWithoutRestaurantInput {
    address?: string | undefined;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    items?: OrderItemCreateNestedManyWithoutOrderInput | undefined;
    Coupon?: CouponCreateNestedOneWithoutOrdersInput | undefined;
    Customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
}
