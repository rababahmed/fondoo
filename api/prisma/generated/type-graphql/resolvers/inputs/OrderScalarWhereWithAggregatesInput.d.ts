import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    items?: JsonWithAggregatesFilter | undefined;
    coupon?: StringNullableWithAggregatesFilter | undefined;
    deliveryCharges?: FloatWithAggregatesFilter | undefined;
    vat?: FloatWithAggregatesFilter | undefined;
    serviceCharge?: FloatWithAggregatesFilter | undefined;
    total?: FloatWithAggregatesFilter | undefined;
    isAccepted?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    restaurantId?: StringWithAggregatesFilter | undefined;
    customerId?: IntNullableWithAggregatesFilter | undefined;
    customerAddressId?: IntNullableWithAggregatesFilter | undefined;
}
