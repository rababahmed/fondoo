import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateWithoutRestaurantsInput";
import { ProductCategoryUpdateWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateWithoutRestaurantsInput, {
    nullable: false
  })
  update!: ProductCategoryUpdateWithoutRestaurantsInput;

  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutRestaurantsInput, {
    nullable: false
  })
  create!: ProductCategoryCreateWithoutRestaurantsInput;
}
