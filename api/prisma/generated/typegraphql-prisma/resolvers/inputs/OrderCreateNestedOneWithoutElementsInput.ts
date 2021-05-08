import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutElementsInput } from "../inputs/OrderCreateOrConnectWithoutElementsInput";
import { OrderCreateWithoutElementsInput } from "../inputs/OrderCreateWithoutElementsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedOneWithoutElementsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutElementsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutElementsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutElementsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutElementsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
