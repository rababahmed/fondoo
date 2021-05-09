import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCreateManyUserInputEnvelope } from "../inputs/UserTokenCreateManyUserInputEnvelope";
import { UserTokenCreateOrConnectWithoutUserInput } from "../inputs/UserTokenCreateOrConnectWithoutUserInput";
import { UserTokenCreateWithoutUserInput } from "../inputs/UserTokenCreateWithoutUserInput";
import { UserTokenScalarWhereInput } from "../inputs/UserTokenScalarWhereInput";
import { UserTokenUpdateManyWithWhereWithoutUserInput } from "../inputs/UserTokenUpdateManyWithWhereWithoutUserInput";
import { UserTokenUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserTokenUpdateWithWhereUniqueWithoutUserInput";
import { UserTokenUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserTokenUpsertWithWhereUniqueWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserTokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserTokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserTokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: UserTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput], {
    nullable: true
  })
  set?: UserTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput], {
    nullable: true
  })
  delete?: UserTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserTokenUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserTokenScalarWhereInput[] | undefined;
}
