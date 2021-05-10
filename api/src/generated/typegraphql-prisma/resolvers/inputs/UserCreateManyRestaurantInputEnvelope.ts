import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRestaurantInput } from "../inputs/UserCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyRestaurantInput], {
    nullable: false
  })
  data!: UserCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
