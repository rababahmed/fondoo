import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerCreateWithoutTokenInput } from "../inputs/CustomerCreateWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutTokenInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutTokenInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutTokenInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
