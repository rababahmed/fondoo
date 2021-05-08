import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneCreateManyRestaurantInput } from "../inputs/DeliveryZoneCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [DeliveryZoneCreateManyRestaurantInput], {
    nullable: false
  })
  data!: DeliveryZoneCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
