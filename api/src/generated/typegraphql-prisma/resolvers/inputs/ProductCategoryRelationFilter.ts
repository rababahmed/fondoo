import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryWhereInput } from "../inputs/ProductCategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryRelationFilter {
  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  is?: ProductCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  isNot?: ProductCategoryWhereInput | undefined;
}
