import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenUpdateWithoutUserInput } from "../inputs/UserTokenUpdateWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTokenUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserTokenUpdateWithoutUserInput;
}
