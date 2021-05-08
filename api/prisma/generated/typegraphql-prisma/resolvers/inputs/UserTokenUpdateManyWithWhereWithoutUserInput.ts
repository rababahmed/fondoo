import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenScalarWhereInput } from "../inputs/UserTokenScalarWhereInput";
import { UserTokenUpdateManyMutationInput } from "../inputs/UserTokenUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTokenScalarWhereInput, {
    nullable: false
  })
  where!: UserTokenScalarWhereInput;

  @TypeGraphQL.Field(_type => UserTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserTokenUpdateManyMutationInput;
}
