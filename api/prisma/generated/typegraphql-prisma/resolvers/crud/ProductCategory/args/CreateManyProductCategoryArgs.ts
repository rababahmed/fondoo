import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryCreateManyInput } from "../../../inputs/ProductCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProductCategoryArgs {
  @TypeGraphQL.Field(_type => [ProductCategoryCreateManyInput], {
    nullable: false
  })
  data!: ProductCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
