import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserTokenScalarWhereInput {
    AND?: UserTokenScalarWhereInput[] | undefined;
    OR?: UserTokenScalarWhereInput[] | undefined;
    NOT?: UserTokenScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: IntNullableFilter | undefined;
}
