import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCategoryInput } from "../inputs/ProductCreateWithoutCategoryInput";
import { ProductUpdateWithoutCategoryInput } from "../inputs/ProductUpdateWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCategoryInput;
}
