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
export class CustomerAddressScalarWhereInput {
  @TypeGraphQL.Field(_type => [CustomerAddressScalarWhereInput], {
    nullable: true
  })
  AND?: CustomerAddressScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressScalarWhereInput], {
    nullable: true
  })
  OR?: CustomerAddressScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressScalarWhereInput], {
    nullable: true
  })
  NOT?: CustomerAddressScalarWhereInput[] | undefined;

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
  streetAddress?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  country?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerId?: IntNullableFilter | undefined;
}
