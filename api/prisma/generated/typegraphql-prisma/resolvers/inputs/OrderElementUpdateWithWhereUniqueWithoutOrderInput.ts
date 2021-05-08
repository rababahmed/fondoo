import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementUpdateWithoutOrderInput } from "../inputs/OrderElementUpdateWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderElementUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: OrderElementUpdateWithoutOrderInput;
}
