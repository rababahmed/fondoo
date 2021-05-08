import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenCreateManyCustomerInputEnvelope } from "../inputs/CustomerTokenCreateManyCustomerInputEnvelope";
import { CustomerTokenCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerTokenCreateOrConnectWithoutCustomerInput";
import { CustomerTokenCreateWithoutCustomerInput } from "../inputs/CustomerTokenCreateWithoutCustomerInput";
import { CustomerTokenWhereUniqueInput } from "../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CustomerTokenCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CustomerTokenCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CustomerTokenCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerTokenCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerTokenWhereUniqueInput[] | undefined;
}
