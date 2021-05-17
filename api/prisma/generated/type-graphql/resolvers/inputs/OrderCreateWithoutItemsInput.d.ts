import { CouponCreateNestedOneWithoutOrdersInput } from "../inputs/CouponCreateNestedOneWithoutOrdersInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { RestaurantCreateNestedOneWithoutOrdersInput } from "../inputs/RestaurantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutItemsInput {
    address?: string | undefined;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Coupon?: CouponCreateNestedOneWithoutOrdersInput | undefined;
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
    Customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;
}
