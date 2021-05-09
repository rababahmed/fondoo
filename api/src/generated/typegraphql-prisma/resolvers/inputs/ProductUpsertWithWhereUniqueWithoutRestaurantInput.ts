import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutRestaurantInput } from "../inputs/ProductCreateWithoutRestaurantInput";
import { ProductUpdateWithoutRestaurantInput } from "../inputs/ProductUpdateWithoutRestaurantInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: ProductCreateWithoutRestaurantInput;
}
