import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerInputEnvelope } from "../inputs/OrderCreateManyCustomerInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerInput } from "../inputs/OrderCreateOrConnectWithoutCustomerInput";
import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
