import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
import { ProductScalarFieldEnum } from "../../../../enums/ProductScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByInput], {
    nullable: true
  })
  orderBy?: ProductOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "name" | "description" | "image" | "price" | "spiceLevel" | "isPopular" | "isActive" | "restaurantId" | "orderId" | "productCategoryId"> | undefined;
}
