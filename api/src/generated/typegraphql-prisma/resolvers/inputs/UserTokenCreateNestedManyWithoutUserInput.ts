import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCreateManyUserInputEnvelope } from "../inputs/UserTokenCreateManyUserInputEnvelope";
import { UserTokenCreateOrConnectWithoutUserInput } from "../inputs/UserTokenCreateOrConnectWithoutUserInput";
import { UserTokenCreateWithoutUserInput } from "../inputs/UserTokenCreateWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserTokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserTokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserTokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: UserTokenWhereUniqueInput[] | undefined;
}
