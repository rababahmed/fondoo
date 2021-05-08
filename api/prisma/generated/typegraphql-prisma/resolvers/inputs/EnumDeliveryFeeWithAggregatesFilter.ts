import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDeliveryFeeFilter } from "../inputs/NestedEnumDeliveryFeeFilter";
import { NestedEnumDeliveryFeeWithAggregatesFilter } from "../inputs/NestedEnumDeliveryFeeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { DeliveryFee } from "../../enums/DeliveryFee";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumDeliveryFeeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumDeliveryFeeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumDeliveryFeeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryFeeFilter, {
    nullable: true
  })
  min?: NestedEnumDeliveryFeeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryFeeFilter, {
    nullable: true
  })
  max?: NestedEnumDeliveryFeeFilter | undefined;
}
