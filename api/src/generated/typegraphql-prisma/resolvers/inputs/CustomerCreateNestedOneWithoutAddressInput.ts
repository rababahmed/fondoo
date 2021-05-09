import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutAddressInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
