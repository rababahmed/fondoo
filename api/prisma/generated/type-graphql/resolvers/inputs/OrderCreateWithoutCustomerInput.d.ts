import { CouponCreateNestedOneWithoutOrdersInput } from "../inputs/CouponCreateNestedOneWithoutOrdersInput";
import { OrderItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderItemCreateNestedManyWithoutOrderInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerInput {
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
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
}
