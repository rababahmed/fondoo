import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  where?: ProductCategoryWhereInput | undefined;
}
