import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { RestaurantListRelationFilter } from "../inputs/RestaurantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserTokenListRelationFilter } from "../inputs/UserTokenListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringNullableFilter | undefined;
    token?: UserTokenListRelationFilter | undefined;
    restaurants?: RestaurantListRelationFilter | undefined;
    role?: EnumRoleFilter | undefined;
}
