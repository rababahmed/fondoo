import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductUpdateWithoutCartElementInput } from "../inputs/ProductUpdateWithoutCartElementInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithoutCartElementInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutCartElementInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCartElementInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCartElementInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCartElementInput;
}
