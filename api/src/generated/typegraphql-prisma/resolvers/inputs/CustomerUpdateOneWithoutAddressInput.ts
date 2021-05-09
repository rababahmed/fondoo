import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerUpdateWithoutAddressInput } from "../inputs/CustomerUpdateWithoutAddressInput";
import { CustomerUpsertWithoutAddressInput } from "../inputs/CustomerUpsertWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateOneWithoutAddressInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutAddressInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutAddressInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutAddressInput | undefined;
}
