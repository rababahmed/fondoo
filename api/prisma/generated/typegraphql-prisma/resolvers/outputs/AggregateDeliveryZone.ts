import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneAvgAggregate } from "../outputs/DeliveryZoneAvgAggregate";
import { DeliveryZoneCountAggregate } from "../outputs/DeliveryZoneCountAggregate";
import { DeliveryZoneMaxAggregate } from "../outputs/DeliveryZoneMaxAggregate";
import { DeliveryZoneMinAggregate } from "../outputs/DeliveryZoneMinAggregate";
import { DeliveryZoneSumAggregate } from "../outputs/DeliveryZoneSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDeliveryZone {
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
