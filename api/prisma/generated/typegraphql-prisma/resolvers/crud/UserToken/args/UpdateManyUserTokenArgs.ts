import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenUpdateManyMutationInput } from "../../../inputs/UserTokenUpdateManyMutationInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  where?: UserTokenWhereInput | undefined;
}
