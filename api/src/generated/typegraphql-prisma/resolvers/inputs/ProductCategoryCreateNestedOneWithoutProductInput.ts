import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryCreateWithoutProductInput } from "../inputs/ProductCategoryCreateWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateNestedOneWithoutProductInput {
  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutProductInput, {
    nullable: true
  })
  create?: ProductCategoryCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductCategoryWhereUniqueInput | undefined;
}
