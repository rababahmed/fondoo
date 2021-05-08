import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneCreateInput } from "../../../inputs/DeliveryZoneCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneCreateInput, {
    nullable: false
  })
  data!: DeliveryZoneCreateInput;
}
