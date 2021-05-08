import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryZoneWhereUniqueInput;
}
