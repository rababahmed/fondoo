import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateManyCategoryInputEnvelope } from "../inputs/OrderElementCreateManyCategoryInputEnvelope";
import { OrderElementCreateOrConnectWithoutCategoryInput } from "../inputs/OrderElementCreateOrConnectWithoutCategoryInput";
import { OrderElementCreateWithoutCategoryInput } from "../inputs/OrderElementCreateWithoutCategoryInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [OrderElementCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: OrderElementCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: OrderElementCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderElementCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: OrderElementCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderElementWhereUniqueInput[] | undefined;
}
