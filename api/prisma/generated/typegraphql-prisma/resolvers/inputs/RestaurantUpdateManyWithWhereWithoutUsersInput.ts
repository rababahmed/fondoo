import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantScalarWhereInput } from "../inputs/RestaurantScalarWhereInput";
import { RestaurantUpdateManyMutationInput } from "../inputs/RestaurantUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => RestaurantScalarWhereInput, {
    nullable: false
  })
  where!: RestaurantScalarWhereInput;

  @TypeGraphQL.Field(_type => RestaurantUpdateManyMutationInput, {
    nullable: false
  })
  data!: RestaurantUpdateManyMutationInput;
}
