import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCategoryInputEnvelope } from "../inputs/ProductCreateManyCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutCategoryInput } from "../inputs/ProductCreateOrConnectWithoutCategoryInput";
import { ProductCreateWithoutCategoryInput } from "../inputs/ProductCreateWithoutCategoryInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCategoryInput } from "../inputs/ProductUpdateManyWithWhereWithoutCategoryInput";
import { ProductUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCategoryInput";
import { ProductUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
