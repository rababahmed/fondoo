import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRestaurantsInput } from "../inputs/UserCreateOrConnectWithoutRestaurantsInput";
import { UserCreateWithoutRestaurantsInput } from "../inputs/UserCreateWithoutRestaurantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRestaurantsInput], {
    nullable: true
  })
  create?: UserCreateWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRestaurantsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
