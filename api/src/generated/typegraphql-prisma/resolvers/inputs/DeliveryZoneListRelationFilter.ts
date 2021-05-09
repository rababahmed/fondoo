import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryZoneWhereInput } from "../inputs/DeliveryZoneWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneListRelationFilter {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  every?: DeliveryZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  some?: DeliveryZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  none?: DeliveryZoneWhereInput | undefined;
}
