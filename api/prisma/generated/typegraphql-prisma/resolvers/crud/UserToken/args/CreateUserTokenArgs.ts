import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenCreateInput } from "../../../inputs/UserTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenCreateInput, {
    nullable: false
  })
  data!: UserTokenCreateInput;
}
