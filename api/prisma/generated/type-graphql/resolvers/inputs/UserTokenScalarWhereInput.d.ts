import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserTokenScalarWhereInput {
    AND?: UserTokenScalarWhereInput[] | undefined;
    OR?: UserTokenScalarWhereInput[] | undefined;
    NOT?: UserTokenScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    provider?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
