import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSpiceLevelFilter } from "../inputs/NestedEnumSpiceLevelFilter";
import { NestedEnumSpiceLevelWithAggregatesFilter } from "../inputs/NestedEnumSpiceLevelWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumSpiceLevelWithAggregatesFilter {
  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: true
  })
  equals?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;

  @TypeGraphQL.Field(_type => [SpiceLevel], {
    nullable: true
  })
  in?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;

  @TypeGraphQL.Field(_type => [SpiceLevel], {
    nullable: true
  })
  notIn?: Array<"None" | "Mild" | "Medium" | "Hot" | "ExtraHot"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiceLevelWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSpiceLevelWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiceLevelFilter, {
    nullable: true
  })
  min?: NestedEnumSpiceLevelFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSpiceLevelFilter, {
    nullable: true
  })
  max?: NestedEnumSpiceLevelFilter | undefined;
}
