import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereInput], {
    nullable: true
  })
  AND?: CustomerTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereInput], {
    nullable: true
  })
  OR?: CustomerTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereInput], {
    nullable: true
  })
  NOT?: CustomerTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerId?: IntNullableFilter | undefined;
}
