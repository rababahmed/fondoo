import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementCreateInput } from "../../../inputs/CartElementCreateInput";
import { CartElementUpdateInput } from "../../../inputs/CartElementUpdateInput";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartElementCreateInput, {
    nullable: false
  })
  create!: CartElementCreateInput;

  @TypeGraphQL.Field(_type => CartElementUpdateInput, {
    nullable: false
  })
  update!: CartElementUpdateInput;
}
