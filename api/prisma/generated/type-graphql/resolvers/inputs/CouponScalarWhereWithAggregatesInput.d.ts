import { EnumDiscountWithAggregatesFilter } from "../inputs/EnumDiscountWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CouponScalarWhereWithAggregatesInput {
    AND?: CouponScalarWhereWithAggregatesInput[] | undefined;
    OR?: CouponScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CouponScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    discount?: EnumDiscountWithAggregatesFilter | undefined;
    value?: FloatWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
}
