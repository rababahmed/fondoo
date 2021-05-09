import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateWithoutOrderInput } from "../inputs/OrderElementCreateWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderElementCreateWithoutOrderInput, {
    nullable: false
  })
  create!: OrderElementCreateWithoutOrderInput;
}
