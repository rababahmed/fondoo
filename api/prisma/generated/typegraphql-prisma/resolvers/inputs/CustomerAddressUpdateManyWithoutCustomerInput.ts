import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateManyCustomerInputEnvelope } from "../inputs/CustomerAddressCreateManyCustomerInputEnvelope";
import { CustomerAddressCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerAddressCreateOrConnectWithoutCustomerInput";
import { CustomerAddressCreateWithoutCustomerInput } from "../inputs/CustomerAddressCreateWithoutCustomerInput";
import { CustomerAddressScalarWhereInput } from "../inputs/CustomerAddressScalarWhereInput";
import { CustomerAddressUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CustomerAddressUpdateManyWithWhereWithoutCustomerInput";
import { CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput";
import { CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CustomerAddressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CustomerAddressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerAddressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: CustomerAddressUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerAddressScalarWhereInput[] | undefined;
}
