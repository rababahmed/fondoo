import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateWithoutProductInput } from "../inputs/CartElementCreateWithoutProductInput";
import { CartElementUpdateWithoutProductInput } from "../inputs/CartElementUpdateWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartElementUpdateWithoutProductInput, {
    nullable: false
  })
  update!: CartElementUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => CartElementCreateWithoutProductInput, {
    nullable: false
  })
  create!: CartElementCreateWithoutProductInput;
}
