import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenCreateManyCustomerInputEnvelope } from "../inputs/CustomerTokenCreateManyCustomerInputEnvelope";
import { CustomerTokenCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerTokenCreateOrConnectWithoutCustomerInput";
import { CustomerTokenCreateWithoutCustomerInput } from "../inputs/CustomerTokenCreateWithoutCustomerInput";
import { CustomerTokenScalarWhereInput } from "../inputs/CustomerTokenScalarWhereInput";
import { CustomerTokenUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CustomerTokenUpdateManyWithWhereWithoutCustomerInput";
import { CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput";
import { CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput";
import { CustomerTokenWhereUniqueInput } from "../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CustomerTokenCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CustomerTokenCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CustomerTokenCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerTokenCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: CustomerTokenUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerTokenScalarWhereInput[] | undefined;
}
