import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserTokenScalarWhereWithAggregatesInput {
    AND?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserTokenScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    provider?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
}
