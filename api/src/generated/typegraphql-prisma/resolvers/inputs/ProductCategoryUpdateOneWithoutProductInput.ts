import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryCreateWithoutProductInput } from "../inputs/ProductCategoryCreateWithoutProductInput";
import { ProductCategoryUpdateWithoutProductInput } from "../inputs/ProductCategoryUpdateWithoutProductInput";
import { ProductCategoryUpsertWithoutProductInput } from "../inputs/ProductCategoryUpsertWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpdateOneWithoutProductInput {
  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutProductInput, {
    nullable: true
  })
  create?: ProductCategoryCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: ProductCategoryUpsertWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateWithoutProductInput, {
    nullable: true
  })
  update?: ProductCategoryUpdateWithoutProductInput | undefined;
}
