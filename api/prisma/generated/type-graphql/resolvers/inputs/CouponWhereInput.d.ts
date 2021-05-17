import { EnumDiscountFilter } from "../inputs/EnumDiscountFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CouponWhereInput {
    AND?: CouponWhereInput[] | undefined;
    OR?: CouponWhereInput[] | undefined;
    NOT?: CouponWhereInput[] | undefined;
    id?: StringFilter | undefined;
    code?: StringFilter | undefined;
    discount?: EnumDiscountFilter | undefined;
    value?: FloatFilter | undefined;
    description?: StringNullableFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
}
