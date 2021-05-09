import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateManyCategoryInput } from "../inputs/OrderElementCreateManyCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderElementCreateManyCategoryInput], {
    nullable: false
  })
  data!: OrderElementCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
