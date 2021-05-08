import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;
}
