import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateWithoutOrderElementInput } from "../inputs/ProductCategoryCreateWithoutOrderElementInput";
import { ProductCategoryUpdateWithoutOrderElementInput } from "../inputs/ProductCategoryUpdateWithoutOrderElementInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpsertWithoutOrderElementInput {
  @TypeGraphQL.Field(_type => ProductCategoryUpdateWithoutOrderElementInput, {
    nullable: false
  })
  update!: ProductCategoryUpdateWithoutOrderElementInput;

  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutOrderElementInput, {
    nullable: false
  })
  create!: ProductCategoryCreateWithoutOrderElementInput;
}
