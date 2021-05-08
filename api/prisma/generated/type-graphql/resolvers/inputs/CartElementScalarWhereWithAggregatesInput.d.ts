import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CartElementScalarWhereWithAggregatesInput {
    AND?: CartElementScalarWhereWithAggregatesInput[] | undefined;
    OR?: CartElementScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CartElementScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    quantity?: IntWithAggregatesFilter | undefined;
    customerId?: IntWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
