import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserTokenWhereInput {
    AND?: UserTokenWhereInput[] | undefined;
    OR?: UserTokenWhereInput[] | undefined;
    NOT?: UserTokenWhereInput[] | undefined;
    id?: IntFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: IntNullableFilter | undefined;
}
