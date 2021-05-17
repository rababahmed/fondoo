import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    role?: EnumRoleWithAggregatesFilter | undefined;
}
