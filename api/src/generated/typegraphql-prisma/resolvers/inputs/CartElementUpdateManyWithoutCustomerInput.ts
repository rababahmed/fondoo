import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyCustomerInputEnvelope } from "../inputs/CartElementCreateManyCustomerInputEnvelope";
import { CartElementCreateOrConnectWithoutCustomerInput } from "../inputs/CartElementCreateOrConnectWithoutCustomerInput";
import { CartElementCreateWithoutCustomerInput } from "../inputs/CartElementCreateWithoutCustomerInput";
import { CartElementScalarWhereInput } from "../inputs/CartElementScalarWhereInput";
import { CartElementUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CartElementUpdateManyWithWhereWithoutCustomerInput";
import { CartElementUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CartElementUpdateWithWhereUniqueWithoutCustomerInput";
import { CartElementUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CartElementUpsertWithWhereUniqueWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CartElementCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CartElementCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CartElementCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: CartElementUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CartElementCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CartElementCreateManyCustomerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartElementUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: CartElementUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: CartElementUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartElementScalarWhereInput[] | undefined;
}
