import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSpiceLevelWithAggregatesFilter } from "../inputs/EnumSpiceLevelWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderItemScalarWhereWithAggregatesInput {
    AND?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    quantity?: IntWithAggregatesFilter | undefined;
    total?: IntWithAggregatesFilter | undefined;
    spiceLevel?: EnumSpiceLevelWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    orderId?: IntNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
