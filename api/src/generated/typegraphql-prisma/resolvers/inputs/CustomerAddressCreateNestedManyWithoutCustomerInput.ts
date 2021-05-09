import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateManyCustomerInputEnvelope } from "../inputs/CustomerAddressCreateManyCustomerInputEnvelope";
import { CustomerAddressCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerAddressCreateOrConnectWithoutCustomerInput";
import { CustomerAddressCreateWithoutCustomerInput } from "../inputs/CustomerAddressCreateWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CustomerAddressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CustomerAddressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerAddressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerAddressWhereUniqueInput[] | undefined;
}
