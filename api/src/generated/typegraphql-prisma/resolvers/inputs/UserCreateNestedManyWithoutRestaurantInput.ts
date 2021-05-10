import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRestaurantInputEnvelope } from "../inputs/UserCreateManyRestaurantInputEnvelope";
import { UserCreateOrConnectWithoutRestaurantInput } from "../inputs/UserCreateOrConnectWithoutRestaurantInput";
import { UserCreateWithoutRestaurantInput } from "../inputs/UserCreateWithoutRestaurantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: UserCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
