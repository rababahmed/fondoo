import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyProductInputEnvelope } from "../inputs/CartElementCreateManyProductInputEnvelope";
import { CartElementCreateOrConnectWithoutProductInput } from "../inputs/CartElementCreateOrConnectWithoutProductInput";
import { CartElementCreateWithoutProductInput } from "../inputs/CartElementCreateWithoutProductInput";
import { CartElementScalarWhereInput } from "../inputs/CartElementScalarWhereInput";
import { CartElementUpdateManyWithWhereWithoutProductInput } from "../inputs/CartElementUpdateManyWithWhereWithoutProductInput";
import { CartElementUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CartElementUpdateWithWhereUniqueWithoutProductInput";
import { CartElementUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CartElementUpsertWithWhereUniqueWithoutProductInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CartElementCreateWithoutProductInput], {
    nullable: true
  })
  create?: CartElementCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: CartElementCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: CartElementUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => CartElementCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: CartElementCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  connect?: CartElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  set?: CartElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CartElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  delete?: CartElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: CartElementUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: CartElementUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartElementScalarWhereInput[] | undefined;
}
