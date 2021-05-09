import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementUpdateWithoutCategoryInput } from "../inputs/OrderElementUpdateWithoutCategoryInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderElementUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: OrderElementUpdateWithoutCategoryInput;
}
