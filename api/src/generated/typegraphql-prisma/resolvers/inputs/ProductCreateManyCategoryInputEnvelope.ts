import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCategoryInput } from "../inputs/ProductCreateManyCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyCategoryInput], {
    nullable: false
  })
  data!: ProductCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
