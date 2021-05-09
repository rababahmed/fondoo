import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementWhereInput } from "../inputs/CartElementWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementListRelationFilter {
  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  every?: CartElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  some?: CartElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  none?: CartElementWhereInput | undefined;
}
