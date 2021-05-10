import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenWhereInput {
  @TypeGraphQL.Field(_type => [UserTokenWhereInput], {
    nullable: true
  })
  AND?: UserTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereInput], {
    nullable: true
  })
  OR?: UserTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereInput], {
    nullable: true
  })
  NOT?: UserTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  provider?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;
}
