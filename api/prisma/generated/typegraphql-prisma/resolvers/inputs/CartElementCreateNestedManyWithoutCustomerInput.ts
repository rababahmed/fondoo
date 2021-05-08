import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyCustomerInputEnvelope } from "../inputs/CartElementCreateManyCustomerInputEnvelope";
import { CartElementCreateOrConnectWithoutCustomerInput } from "../inputs/CartElementCreateOrConnectWithoutCustomerInput";
import { CartElementCreateWithoutCustomerInput } from "../inputs/CartElementCreateWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CartElementCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CartElementCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CartElementCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CartElementCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CartElementCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartElementWhereUniqueInput], {
    nullable: true
  })
  connect?: CartElementWhereUniqueInput[] | undefined;
}
