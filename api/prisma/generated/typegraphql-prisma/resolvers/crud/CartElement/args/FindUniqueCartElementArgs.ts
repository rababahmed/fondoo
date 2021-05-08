import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;
}
