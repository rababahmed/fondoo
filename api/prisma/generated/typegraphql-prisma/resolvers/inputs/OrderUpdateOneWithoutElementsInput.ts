import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutElementsInput } from "../inputs/OrderCreateOrConnectWithoutElementsInput";
import { OrderCreateWithoutElementsInput } from "../inputs/OrderCreateWithoutElementsInput";
import { OrderUpdateWithoutElementsInput } from "../inputs/OrderUpdateWithoutElementsInput";
import { OrderUpsertWithoutElementsInput } from "../inputs/OrderUpsertWithoutElementsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateOneWithoutElementsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutElementsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutElementsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutElementsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutElementsInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutElementsInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutElementsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutElementsInput, {
    nullable: true
  })
  update?: OrderUpdateWithoutElementsInput | undefined;
}
