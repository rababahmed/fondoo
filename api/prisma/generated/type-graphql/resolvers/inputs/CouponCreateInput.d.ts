import { OrderCreateNestedManyWithoutCouponInput } from "../inputs/OrderCreateNestedManyWithoutCouponInput";
export declare class CouponCreateInput {
    id?: string | undefined;
    code: string;
    discount: "Fixed" | "Percent";
    value: number;
    description?: string | undefined;
    orders?: OrderCreateNestedManyWithoutCouponInput | undefined;
}
