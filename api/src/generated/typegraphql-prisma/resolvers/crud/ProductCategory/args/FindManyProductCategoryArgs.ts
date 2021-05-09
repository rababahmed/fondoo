import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCategoryOrderByInput } from "../../../inputs/ProductCategoryOrderByInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";
import { ProductCategoryScalarFieldEnum } from "../../../../enums/ProductCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProductCategoryArgs {
  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  where?: ProductCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryOrderByInput], {
    nullable: true
  })
  orderBy?: ProductCategoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "name" | "description" | "image" | "isActive" | "isFeatured" | "restaurantId"> | undefined;
}
