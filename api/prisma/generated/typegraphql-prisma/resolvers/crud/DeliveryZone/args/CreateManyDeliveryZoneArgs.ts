import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneCreateManyInput } from "../../../inputs/DeliveryZoneCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => [DeliveryZoneCreateManyInput], {
    nullable: false
  })
  data!: DeliveryZoneCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
