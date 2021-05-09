import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateManyRestaurantsInput } from "../inputs/ProductCategoryCreateManyRestaurantsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateManyRestaurantsInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCategoryCreateManyRestaurantsInput], {
    nullable: false
  })
  data!: ProductCategoryCreateManyRestaurantsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
