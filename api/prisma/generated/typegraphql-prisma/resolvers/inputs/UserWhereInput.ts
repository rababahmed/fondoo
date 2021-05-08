import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleNullableListFilter } from "../inputs/EnumRoleNullableListFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RestaurantListRelationFilter } from "../inputs/RestaurantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserTokenListRelationFilter } from "../inputs/UserTokenListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fullName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserTokenListRelationFilter, {
    nullable: true
  })
  token?: UserTokenListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleNullableListFilter, {
    nullable: true
  })
  role?: EnumRoleNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantListRelationFilter, {
    nullable: true
  })
  restaurants?: RestaurantListRelationFilter | undefined;
}
