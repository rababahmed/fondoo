import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutDeliveryZonesInput } from "../inputs/RestaurantCreateWithoutDeliveryZonesInput";
import { RestaurantUpdateWithoutDeliveryZonesInput } from "../inputs/RestaurantUpdateWithoutDeliveryZonesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutDeliveryZonesInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutDeliveryZonesInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutDeliveryZonesInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutDeliveryZonesInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutDeliveryZonesInput;
}
