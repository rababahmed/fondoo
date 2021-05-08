import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerAddressInputEnvelope } from "../inputs/OrderCreateManyCustomerAddressInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerAddressInput } from "../inputs/OrderCreateOrConnectWithoutCustomerAddressInput";
import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCustomerAddressInput } from "../inputs/OrderUpdateManyWithWhereWithoutCustomerAddressInput";
import { OrderUpdateWithWhereUniqueWithoutCustomerAddressInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCustomerAddressInput";
import { OrderUpsertWithWhereUniqueWithoutCustomerAddressInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateManyWithoutCustomerAddressInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerAddressInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerAddressInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerAddressInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCustomerAddressInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCustomerAddressInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerAddressInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerAddressInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
