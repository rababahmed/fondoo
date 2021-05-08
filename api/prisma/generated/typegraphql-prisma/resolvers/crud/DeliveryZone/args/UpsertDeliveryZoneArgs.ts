import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneCreateInput } from "../../../inputs/DeliveryZoneCreateInput";
import { DeliveryZoneUpdateInput } from "../../../inputs/DeliveryZoneUpdateInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryZoneCreateInput, {
    nullable: false
  })
  create!: DeliveryZoneCreateInput;

  @TypeGraphQL.Field(_type => DeliveryZoneUpdateInput, {
    nullable: false
  })
  update!: DeliveryZoneUpdateInput;
}
