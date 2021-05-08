import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateManyRestaurantsInputEnvelope } from "../inputs/ProductCategoryCreateManyRestaurantsInputEnvelope";
import { ProductCategoryCreateOrConnectWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateOrConnectWithoutRestaurantsInput";
import { ProductCategoryCreateWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateNestedManyWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => [ProductCategoryCreateWithoutRestaurantsInput], {
    nullable: true
  })
  create?: ProductCategoryCreateWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryCreateOrConnectWithoutRestaurantsInput], {
    nullable: true
  })
  connectOrCreate?: ProductCategoryCreateOrConnectWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateManyRestaurantsInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCategoryCreateManyRestaurantsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductCategoryWhereUniqueInput[] | undefined;
}
