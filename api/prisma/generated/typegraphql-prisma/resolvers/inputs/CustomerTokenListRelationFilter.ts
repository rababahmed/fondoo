import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenWhereInput } from "../inputs/CustomerTokenWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenListRelationFilter {
  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  every?: CustomerTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  some?: CustomerTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  none?: CustomerTokenWhereInput | undefined;
}
