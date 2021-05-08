import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateOrConnectWithoutDeliveryZonesInput";
import { RestaurantCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateWithoutDeliveryZonesInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutDeliveryZonesInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutDeliveryZonesInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutDeliveryZonesInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutDeliveryZonesInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutDeliveryZonesInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
