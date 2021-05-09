import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneAvgAggregate } from "../outputs/DeliveryZoneAvgAggregate";
import { DeliveryZoneCountAggregate } from "../outputs/DeliveryZoneCountAggregate";
import { DeliveryZoneMaxAggregate } from "../outputs/DeliveryZoneMaxAggregate";
import { DeliveryZoneMinAggregate } from "../outputs/DeliveryZoneMinAggregate";
import { DeliveryZoneSumAggregate } from "../outputs/DeliveryZoneSumAggregate";
import { DeliveryFee } from "../../enums/DeliveryFee";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DeliveryZoneGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  zoneTitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zonePostCode!: string | null;

  @TypeGraphQL.Field(_type => DeliveryFee, {
    nullable: false
  })
  deliveryFeeType!: "Fixed" | "Percent";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deliveryCharge!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryRadius!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  maxDeliveryRadius!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

  @TypeGraphQL.Field(_type => DeliveryZoneCountAggregate, {
    nullable: true
  })
  count!: DeliveryZoneCountAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryZoneAvgAggregate, {
    nullable: true
  })
  avg!: DeliveryZoneAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryZoneSumAggregate, {
    nullable: true
  })
  sum!: DeliveryZoneSumAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryZoneMinAggregate, {
    nullable: true
  })
  min!: DeliveryZoneMinAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryZoneMaxAggregate, {
    nullable: true
  })
  max!: DeliveryZoneMaxAggregate | null;
}
