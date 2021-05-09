import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryWhereInput } from "../inputs/ProductCategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  every?: ProductCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  some?: ProductCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryWhereInput, {
    nullable: true
  })
  none?: ProductCategoryWhereInput | undefined;
}
