import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCartInput } from "../inputs/CustomerCreateOrConnectWithoutCartInput";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutCartInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCartInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
