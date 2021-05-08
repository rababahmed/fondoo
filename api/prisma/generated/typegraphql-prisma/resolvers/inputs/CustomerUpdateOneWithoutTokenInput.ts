import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerCreateWithoutTokenInput } from "../inputs/CustomerCreateWithoutTokenInput";
import { CustomerUpdateWithoutTokenInput } from "../inputs/CustomerUpdateWithoutTokenInput";
import { CustomerUpsertWithoutTokenInput } from "../inputs/CustomerUpsertWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateOneWithoutTokenInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutTokenInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutTokenInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutTokenInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutTokenInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutTokenInput | undefined;
}
