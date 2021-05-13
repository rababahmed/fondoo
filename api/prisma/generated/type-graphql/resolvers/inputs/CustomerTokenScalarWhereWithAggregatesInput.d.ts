import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerTokenScalarWhereWithAggregatesInput {
    AND?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    customerId?: IntNullableWithAggregatesFilter | undefined;
}
