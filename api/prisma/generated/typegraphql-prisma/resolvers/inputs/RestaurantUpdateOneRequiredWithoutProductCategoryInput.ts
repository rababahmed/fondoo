import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutProductCategoryInput } from "../inputs/RestaurantCreateOrConnectWithoutProductCategoryInput";
import { RestaurantCreateWithoutProductCategoryInput } from "../inputs/RestaurantCreateWithoutProductCategoryInput";
import { RestaurantUpdateWithoutProductCategoryInput } from "../inputs/RestaurantUpdateWithoutProductCategoryInput";
import { RestaurantUpsertWithoutProductCategoryInput } from "../inputs/RestaurantUpsertWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateOneRequiredWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductCategoryInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutProductCategoryInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutProductCategoryInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutProductCategoryInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpsertWithoutProductCategoryInput, {
    nullable: true
  })
  upsert?: RestaurantUpsertWithoutProductCategoryInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutProductCategoryInput, {
    nullable: true
  })
  update?: RestaurantUpdateWithoutProductCategoryInput | undefined;
}
