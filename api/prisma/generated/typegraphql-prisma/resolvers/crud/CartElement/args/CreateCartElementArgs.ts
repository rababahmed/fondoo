import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementCreateInput } from "../../../inputs/CartElementCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementCreateInput, {
    nullable: false
  })
  data!: CartElementCreateInput;
}
