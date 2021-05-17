import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    address?: StringNullableWithAggregatesFilter | undefined;
    discount?: FloatWithAggregatesFilter | undefined;
    deliveryCharges?: FloatWithAggregatesFilter | undefined;
    vat?: FloatWithAggregatesFilter | undefined;
    serviceCharge?: FloatWithAggregatesFilter | undefined;
    total?: FloatWithAggregatesFilter | undefined;
    isAccepted?: BoolWithAggregatesFilter | undefined;
    couponId?: StringNullableWithAggregatesFilter | undefined;
    restaurantId?: StringWithAggregatesFilter | undefined;
    customerId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
