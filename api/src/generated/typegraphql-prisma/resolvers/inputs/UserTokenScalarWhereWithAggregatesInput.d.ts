import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserTokenScalarWhereWithAggregatesInput {
    AND?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    provider?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: IntNullableWithAggregatesFilter | undefined;
}
