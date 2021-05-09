import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutProductInput } from "../inputs/OrderCreateOrConnectWithoutProductInput";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderUpdateWithoutProductInput } from "../inputs/OrderUpdateWithoutProductInput";
import { OrderUpsertWithoutProductInput } from "../inputs/OrderUpsertWithoutProductInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateOneWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutProductInput, {
    nullable: true
  })
  create?: OrderCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutProductInput | undefined;

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

  @TypeGraphQL.Field(_type => OrderUpdateWithoutProductInput, {
    nullable: true
  })
  update?: OrderUpdateWithoutProductInput | undefined;
}
