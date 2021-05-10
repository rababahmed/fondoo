import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUserInput } from "../inputs/OrderCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyUserInput], {
    nullable: false
  })
  data!: OrderCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
