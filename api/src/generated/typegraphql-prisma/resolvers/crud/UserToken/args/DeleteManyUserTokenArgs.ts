import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  where?: UserTokenWhereInput | undefined;
}
