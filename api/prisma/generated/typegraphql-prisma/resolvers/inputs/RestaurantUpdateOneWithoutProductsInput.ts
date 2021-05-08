import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantCreateWithoutProductsInput } from "../inputs/RestaurantCreateWithoutProductsInput";
import { RestaurantUpdateWithoutProductsInput } from "../inputs/RestaurantUpdateWithoutProductsInput";
import { RestaurantUpsertWithoutProductsInput } from "../inputs/RestaurantUpsertWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductsInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpsertWithoutProductsInput, {
    nullable: true
  })
  upsert?: RestaurantUpsertWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutProductsInput, {
    nullable: true
  })
  update?: RestaurantUpdateWithoutProductsInput | undefined;
}
