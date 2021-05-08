import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumRoleNullableListFilter {
  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  equals?: Array<"Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  has?: "Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  hasEvery?: Array<"Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  hasSome?: Array<"Waiter" | "Cashier" | "Manager" | "Owner" | "Admin" | "SuperAdmin"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
