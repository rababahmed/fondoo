import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementUpdateInput } from "../../../inputs/CartElementUpdateInput";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementUpdateInput, {
    nullable: false
  })
  data!: CartElementUpdateInput;

  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;
}
