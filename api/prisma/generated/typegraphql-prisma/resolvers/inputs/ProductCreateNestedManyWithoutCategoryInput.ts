import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCategoryInputEnvelope } from "../inputs/ProductCreateManyCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutCategoryInput } from "../inputs/ProductCreateOrConnectWithoutCategoryInput";
import { ProductCreateWithoutCategoryInput } from "../inputs/ProductCreateWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
