import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserTokenScalarWhereInput {
    AND?: UserTokenScalarWhereInput[] | undefined;
    OR?: UserTokenScalarWhereInput[] | undefined;
    NOT?: UserTokenScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    token?: StringFilter | undefined;
    provider?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: IntNullableFilter | undefined;
}
