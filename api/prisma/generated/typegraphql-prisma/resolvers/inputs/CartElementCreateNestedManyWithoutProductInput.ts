import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyProductInputEnvelope } from "../inputs/CartElementCreateManyProductInputEnvelope";
import { CartElementCreateOrConnectWithoutProductInput } from "../inputs/CartElementCreateOrConnectWithoutProductInput";
import { CartElementCreateWithoutProductInput } from "../inputs/CartElementCreateWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CartElementCreateWithoutProductInput], {
    nullable: true
  })
  create?: CartElementCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: CartElementCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => CartElementCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: CartElementCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  connect?: CartElementWhereUniqueInput[] | undefined;
}
