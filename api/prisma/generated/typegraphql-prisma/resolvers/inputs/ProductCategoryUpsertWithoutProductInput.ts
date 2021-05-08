import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateWithoutProductInput } from "../inputs/ProductCategoryCreateWithoutProductInput";
import { ProductCategoryUpdateWithoutProductInput } from "../inputs/ProductCategoryUpdateWithoutProductInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => ProductCategoryUpdateWithoutProductInput, {
    nullable: false
  })
  update!: ProductCategoryUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutProductInput, {
    nullable: false
  })
  create!: ProductCategoryCreateWithoutProductInput;
}
