import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderElementScalarWhereWithAggregatesInput {
    AND?: OrderElementScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderElementScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderElementScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    price?: IntWithAggregatesFilter | undefined;
    addonText?: StringNullableWithAggregatesFilter | undefined;
    orderId?: IntNullableWithAggregatesFilter | undefined;
    productCategoryId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
