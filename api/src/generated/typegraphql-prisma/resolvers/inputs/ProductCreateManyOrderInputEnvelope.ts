import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyOrderInput } from "../inputs/ProductCreateManyOrderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyOrderInput], {
    nullable: false
  })
  data!: ProductCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
