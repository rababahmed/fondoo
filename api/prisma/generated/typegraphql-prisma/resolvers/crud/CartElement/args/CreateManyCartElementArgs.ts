import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementCreateManyInput } from "../../../inputs/CartElementCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCartElementArgs {
  @TypeGraphQL.Field(_type => [CartElementCreateManyInput], {
    nullable: false
  })
  data!: CartElementCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
