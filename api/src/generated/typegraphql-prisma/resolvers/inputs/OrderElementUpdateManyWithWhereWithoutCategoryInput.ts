import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementScalarWhereInput } from "../inputs/OrderElementScalarWhereInput";
import { OrderElementUpdateManyMutationInput } from "../inputs/OrderElementUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => OrderElementScalarWhereInput, {
    nullable: false
  })
  where!: OrderElementScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderElementUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderElementUpdateManyMutationInput;
}
