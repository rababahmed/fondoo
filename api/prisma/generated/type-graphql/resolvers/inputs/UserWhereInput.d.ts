import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RestaurantListRelationFilter } from "../inputs/RestaurantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserTokenListRelationFilter } from "../inputs/UserTokenListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    fullName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringNullableFilter | undefined;
    token?: UserTokenListRelationFilter | undefined;
    role?: EnumUserRoleFilter | undefined;
    restaurants?: RestaurantListRelationFilter | undefined;
}
