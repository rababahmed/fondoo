import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateNestedManyWithoutUsersInput } from "../inputs/RestaurantCreateNestedManyWithoutUsersInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutTokenInput {
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
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  restaurants?: RestaurantCreateNestedManyWithoutUsersInput | undefined;
}
