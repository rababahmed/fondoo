import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductListRelationFilter {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  every?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  some?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  none?: ProductWhereInput | undefined;
}
