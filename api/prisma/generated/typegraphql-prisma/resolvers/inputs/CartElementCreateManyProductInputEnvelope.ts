import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyProductInput } from "../inputs/CartElementCreateManyProductInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [CartElementCreateManyProductInput], {
    nullable: false
  })
  data!: CartElementCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
