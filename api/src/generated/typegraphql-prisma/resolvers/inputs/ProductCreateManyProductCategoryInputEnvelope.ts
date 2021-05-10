import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProductCategoryInput } from "../inputs/ProductCreateManyProductCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateManyProductCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyProductCategoryInput], {
    nullable: false
  })
  data!: ProductCreateManyProductCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
