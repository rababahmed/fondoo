import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryUpdateInput } from "../../../inputs/ProductCategoryUpdateInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryUpdateInput, {
    nullable: false
  })
  data!: ProductCategoryUpdateInput;

  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;
}
