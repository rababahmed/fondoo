import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerTokenScalarWhereWithAggregatesInput {
    AND?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    customerId?: StringNullableWithAggregatesFilter | undefined;
}
