import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenCreateInput } from "../../../inputs/UserTokenCreateInput";
import { UserTokenUpdateInput } from "../../../inputs/UserTokenUpdateInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTokenCreateInput, {
    nullable: false
  })
  create!: UserTokenCreateInput;

  @TypeGraphQL.Field(_type => UserTokenUpdateInput, {
    nullable: false
  })
  update!: UserTokenUpdateInput;
}
