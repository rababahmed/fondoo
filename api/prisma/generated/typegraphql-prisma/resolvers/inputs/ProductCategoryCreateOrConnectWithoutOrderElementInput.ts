import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCreateWithoutOrderElementInput } from "../inputs/ProductCategoryCreateWithoutOrderElementInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryCreateOrConnectWithoutOrderElementInput {
  @TypeGraphQL.Field(_type => ProductCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ProductCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCategoryCreateWithoutOrderElementInput, {
    nullable: false
  })
  create!: ProductCategoryCreateWithoutOrderElementInput;
}
