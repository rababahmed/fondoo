import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProductCategoryInput } from "../inputs/ProductCreateWithoutProductCategoryInput";
import { ProductUpdateWithoutProductCategoryInput } from "../inputs/ProductUpdateWithoutProductCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProductCategoryInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProductCategoryInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProductCategoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProductCategoryInput;
}
