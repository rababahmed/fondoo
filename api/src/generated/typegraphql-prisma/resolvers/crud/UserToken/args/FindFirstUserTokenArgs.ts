import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenOrderByInput } from "../../../inputs/UserTokenOrderByInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";
import { UserTokenScalarFieldEnum } from "../../../../enums/UserTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  where?: UserTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserTokenOrderByInput], {
    nullable: true
  })
  orderBy?: UserTokenOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "token" | "provider" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
