import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenWhereInput } from "../inputs/UserTokenWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserTokenListRelationFilter {
  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  every?: UserTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  some?: UserTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  none?: UserTokenWhereInput | undefined;
}
