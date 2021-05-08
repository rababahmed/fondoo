import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    fullName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringNullableFilter | undefined;
    role?: EnumUserRoleFilter | undefined;
}
