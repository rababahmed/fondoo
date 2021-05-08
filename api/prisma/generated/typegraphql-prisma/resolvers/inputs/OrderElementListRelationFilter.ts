import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementWhereInput } from "../inputs/OrderElementWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementListRelationFilter {
  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  every?: OrderElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  some?: OrderElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  none?: OrderElementWhereInput | undefined;
}
