import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerListRelationFilter {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  every?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  some?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  none?: CustomerWhereInput | undefined;
}
