import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserCreateWithoutTokenInput } from "../inputs/UserCreateWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutTokenInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTokenInput, {
    nullable: true
  })
  create?: UserCreateWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTokenInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
