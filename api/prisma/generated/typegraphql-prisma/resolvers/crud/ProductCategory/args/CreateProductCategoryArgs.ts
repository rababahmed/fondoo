import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryCreateInput } from "../../../inputs/ProductCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryCreateInput, {
    nullable: false
  })
  data!: ProductCategoryCreateInput;
}
