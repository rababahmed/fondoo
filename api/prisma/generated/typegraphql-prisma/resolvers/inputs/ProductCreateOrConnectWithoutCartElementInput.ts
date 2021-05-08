import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateOrConnectWithoutCartElementInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCartElementInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCartElementInput;
}
