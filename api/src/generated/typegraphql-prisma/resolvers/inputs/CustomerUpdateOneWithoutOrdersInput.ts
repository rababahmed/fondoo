import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerCreateWithoutOrdersInput } from "../inputs/CustomerCreateWithoutOrdersInput";
import { CustomerUpdateWithoutOrdersInput } from "../inputs/CustomerUpdateWithoutOrdersInput";
import { CustomerUpsertWithoutOrdersInput } from "../inputs/CustomerUpsertWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutOrdersInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutOrdersInput | undefined;
}
