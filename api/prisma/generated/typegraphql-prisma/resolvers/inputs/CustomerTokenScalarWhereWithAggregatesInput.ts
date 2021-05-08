import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CustomerTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  customerId?: IntNullableWithAggregatesFilter | undefined;
}
