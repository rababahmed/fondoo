import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateWithoutDeliveryZonesInput";
import { RestaurantUpdateWithoutDeliveryZonesInput } from "../inputs/RestaurantUpdateWithoutDeliveryZonesInput";
import { RestaurantUpsertWithoutDeliveryZonesInput } from "../inputs/RestaurantUpsertWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateOneWithoutDeliveryZonesInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutDeliveryZonesInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutDeliveryZonesInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutDeliveryZonesInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpsertWithoutDeliveryZonesInput, {
    nullable: true
  })
  upsert?: RestaurantUpsertWithoutDeliveryZonesInput | undefined;

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

  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutDeliveryZonesInput, {
    nullable: true
  })
  update?: RestaurantUpdateWithoutDeliveryZonesInput | undefined;
}
