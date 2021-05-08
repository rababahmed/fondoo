import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryOrderByInput } from "../../../inputs/ProductCategoryOrderByInput";
import { ProductCategoryScalarWhereWithAggregatesInput } from "../../../inputs/ProductCategoryScalarWhereWithAggregatesInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";
import { ProductCategoryScalarFieldEnum } from "../../../../enums/ProductCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  where?: ProductCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryOrderByInput], {
    nullable: true
  })
  orderBy?: ProductCategoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "name" | "description" | "image" | "isActive" | "isFeatured" | "restaurantId">;

  @TypeGraphQL.Field(_type => ProductCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
