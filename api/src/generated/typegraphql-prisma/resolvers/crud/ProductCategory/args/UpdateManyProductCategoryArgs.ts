import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryUpdateManyMutationInput } from "../../../inputs/ProductCategoryUpdateManyMutationInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  where?: ProductCategoryWhereInput | undefined;
}
