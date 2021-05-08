import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUserRoleWithAggregatesFilter } from "../inputs/EnumUserRoleWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    fullName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    role?: EnumUserRoleWithAggregatesFilter | undefined;
}
