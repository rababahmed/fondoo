import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementUpdateWithoutProductInput } from "../inputs/CartElementUpdateWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartElementUpdateWithoutProductInput, {
    nullable: false
  })
  data!: CartElementUpdateWithoutProductInput;
}
