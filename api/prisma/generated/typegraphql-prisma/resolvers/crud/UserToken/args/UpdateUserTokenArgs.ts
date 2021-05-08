import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenUpdateInput } from "../../../inputs/UserTokenUpdateInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenUpdateInput, {
    nullable: false
  })
  data!: UserTokenUpdateInput;

  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserTokenWhereUniqueInput;
}
