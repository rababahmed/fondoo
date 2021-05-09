import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenCreateManyInput } from "../../../inputs/UserTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserTokenArgs {
  @TypeGraphQL.Field(_type => [UserTokenCreateManyInput], {
    nullable: false
  })
  data!: UserTokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
