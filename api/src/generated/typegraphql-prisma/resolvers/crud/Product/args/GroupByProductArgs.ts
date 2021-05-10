import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductScalarWhereWithAggregatesInput } from "../../../inputs/ProductScalarWhereWithAggregatesInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductScalarFieldEnum } from "../../../../enums/ProductScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByInput], {
    nullable: true
  })
  orderBy?: ProductOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "name" | "description" | "image" | "price" | "spiceLevel" | "isPopular" | "isActive" | "productCategoryId" | "restaurantId">;

  @TypeGraphQL.Field(_type => ProductScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
