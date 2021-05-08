import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerAddressInputEnvelope } from "../inputs/OrderCreateManyCustomerAddressInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerAddressInput } from "../inputs/OrderCreateOrConnectWithoutCustomerAddressInput";
import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedManyWithoutCustomerAddressInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerAddressInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerAddressInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCustomerAddressInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCustomerAddressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
