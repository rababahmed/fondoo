import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutCategoryInput } from "../inputs/ProductUpdateWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutCategoryInput;
}
