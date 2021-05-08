import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDeliveryFeeFilter } from "../inputs/NestedEnumDeliveryFeeFilter";
import { DeliveryFee } from "../../enums/DeliveryFee";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumDeliveryFeeFilter {
  @TypeGraphQL.Field(_type => DeliveryFee, {
    nullable: true
  })
  equals?: "Fixed" | "Percent" | undefined;

  @TypeGraphQL.Field(_type => [DeliveryFee], {
    nullable: true
  })
  in?: Array<"Fixed" | "Percent"> | undefined;

  @TypeGraphQL.Field(_type => [DeliveryFee], {
    nullable: true
  })
  notIn?: Array<"Fixed" | "Percent"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryFeeFilter, {
    nullable: true
  })
  not?: NestedEnumDeliveryFeeFilter | undefined;
}
