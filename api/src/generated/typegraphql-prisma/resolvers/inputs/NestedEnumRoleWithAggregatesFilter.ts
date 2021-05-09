import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  equals?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  in?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  notIn?: Array<"Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  min?: NestedEnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  max?: NestedEnumRoleFilter | undefined;
}
