import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProductCategoryInputEnvelope } from "../inputs/ProductCreateManyProductCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutProductCategoryInput } from "../inputs/ProductCreateOrConnectWithoutProductCategoryInput";
import { ProductCreateWithoutProductCategoryInput } from "../inputs/ProductCreateWithoutProductCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedManyWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProductCategoryInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProductCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProductCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProductCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
