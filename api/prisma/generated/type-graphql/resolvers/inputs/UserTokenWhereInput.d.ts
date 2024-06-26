import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserTokenWhereInput {
    AND?: UserTokenWhereInput[] | undefined;
    OR?: UserTokenWhereInput[] | undefined;
    NOT?: UserTokenWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    provider?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
