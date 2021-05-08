import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCartInput } from "../inputs/CustomerCreateOrConnectWithoutCartInput";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerUpdateWithoutCartInput } from "../inputs/CustomerUpdateWithoutCartInput";
import { CustomerUpsertWithoutCartInput } from "../inputs/CustomerUpsertWithoutCartInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateOneRequiredWithoutCartInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCartInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCartInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCartInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutCartInput | undefined;
}
