import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateManyCategoryInputEnvelope } from "../inputs/OrderElementCreateManyCategoryInputEnvelope";
import { OrderElementCreateOrConnectWithoutCategoryInput } from "../inputs/OrderElementCreateOrConnectWithoutCategoryInput";
import { OrderElementCreateWithoutCategoryInput } from "../inputs/OrderElementCreateWithoutCategoryInput";
import { OrderElementScalarWhereInput } from "../inputs/OrderElementScalarWhereInput";
import { OrderElementUpdateManyWithWhereWithoutCategoryInput } from "../inputs/OrderElementUpdateManyWithWhereWithoutCategoryInput";
import { OrderElementUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/OrderElementUpdateWithWhereUniqueWithoutCategoryInput";
import { OrderElementUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/OrderElementUpsertWithWhereUniqueWithoutCategoryInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [OrderElementCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: OrderElementCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: OrderElementCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: OrderElementUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderElementCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: OrderElementCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  set?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderElementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: OrderElementUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: OrderElementUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderElementScalarWhereInput[] | undefined;
}
