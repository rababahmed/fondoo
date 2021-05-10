import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUserInputEnvelope } from "../inputs/OrderCreateManyUserInputEnvelope";
import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutUserInput], {
    nullable: true
  })
  create?: OrderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
