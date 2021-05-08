import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateOrConnectWithoutOrderElementInput } from "../inputs/ProductCategoryCreateOrConnectWithoutOrderElementInput";
import { ProductCategoryCreateWithoutOrderElementInput } from "../inputs/ProductCategoryCreateWithoutOrderElementInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateNestedOneWithoutOrderElementInput {
  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutOrderElementInput, {
    nullable: true
  })
  create?: ProductCategoryCreateWithoutOrderElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryCreateOrConnectWithoutOrderElementInput, {
    nullable: true
  })
  connectOrCreate?: ProductCategoryCreateOrConnectWithoutOrderElementInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductCategoryWhereUniqueInput | undefined;
}
