import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  where?: CartElementWhereInput | undefined;
}
