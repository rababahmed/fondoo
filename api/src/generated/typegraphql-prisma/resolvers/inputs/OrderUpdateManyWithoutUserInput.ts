import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUserInputEnvelope } from "../inputs/OrderCreateManyUserInputEnvelope";
import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutUserInput } from "../inputs/OrderUpdateManyWithWhereWithoutUserInput";
import { OrderUpdateWithWhereUniqueWithoutUserInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutUserInput";
import { OrderUpsertWithWhereUniqueWithoutUserInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutUserInput], {
    nullable: true
  })
  create?: OrderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
