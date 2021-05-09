import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryCreateInput } from "../../../inputs/ProductCategoryCreateInput";
import { ProductCategoryUpdateInput } from "../../../inputs/ProductCategoryUpdateInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCategoryCreateInput, {
    nullable: false
  })
  create!: ProductCategoryCreateInput;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateInput, {
    nullable: false
  })
  update!: ProductCategoryUpdateInput;
}
