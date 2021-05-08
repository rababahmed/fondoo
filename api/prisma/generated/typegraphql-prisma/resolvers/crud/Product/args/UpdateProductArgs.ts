import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductUpdateInput } from "../../../inputs/ProductUpdateInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProductArgs {
  @TypeGraphQL.Field(_type => ProductUpdateInput, {
    nullable: false
  })
  data!: ProductUpdateInput;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;
}
