import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRestaurantsInput } from "../inputs/UserCreateOrConnectWithoutRestaurantsInput";
import { UserCreateWithoutRestaurantsInput } from "../inputs/UserCreateWithoutRestaurantsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/UserUpdateManyWithWhereWithoutRestaurantsInput";
import { UserUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRestaurantsInput";
import { UserUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRestaurantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRestaurantsInput], {
    nullable: true
  })
  create?: UserCreateWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRestaurantsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRestaurantsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRestaurantsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRestaurantsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
