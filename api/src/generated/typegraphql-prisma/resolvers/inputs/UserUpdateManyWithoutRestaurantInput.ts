import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRestaurantInputEnvelope } from "../inputs/UserCreateManyRestaurantInputEnvelope";
import { UserCreateOrConnectWithoutRestaurantInput } from "../inputs/UserCreateOrConnectWithoutRestaurantInput";
import { UserCreateWithoutRestaurantInput } from "../inputs/UserCreateWithoutRestaurantInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/UserUpdateManyWithWhereWithoutRestaurantInput";
import { UserUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRestaurantInput";
import { UserUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRestaurantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: UserCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyRestaurantInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
