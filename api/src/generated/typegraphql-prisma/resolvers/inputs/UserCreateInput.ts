import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedManyWithoutUserInput } from "../inputs/OrderCreateNestedManyWithoutUserInput";
import { RestaurantCreateNestedOneWithoutUsersInput } from "../inputs/RestaurantCreateNestedOneWithoutUsersInput";
import { UserTokenCreateNestedManyWithoutUserInput } from "../inputs/UserTokenCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "Manager" | "Owner" | "Admin" | "SuperAdmin" | undefined;

  @TypeGraphQL.Field(_type => UserTokenCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  token?: UserTokenCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  Restaurant?: RestaurantCreateNestedOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutUserInput | undefined;
}
