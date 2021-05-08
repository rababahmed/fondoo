import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryUpdateWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateWithoutRestaurantsInput, {
    nullable: false
  })
  data!: ProductCategoryUpdateWithoutRestaurantsInput;
}
