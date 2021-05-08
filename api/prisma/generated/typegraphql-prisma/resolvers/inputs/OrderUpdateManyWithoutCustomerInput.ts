import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerInputEnvelope } from "../inputs/OrderCreateManyCustomerInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerInput } from "../inputs/OrderCreateOrConnectWithoutCustomerInput";
import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCustomerInput } from "../inputs/OrderUpdateManyWithWhereWithoutCustomerInput";
import { OrderUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCustomerInput";
import { OrderUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCustomerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
