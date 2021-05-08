import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCreateManyUserInput } from "../inputs/UserTokenCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserTokenCreateManyUserInput], {
    nullable: false
  })
  data!: UserTokenCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
