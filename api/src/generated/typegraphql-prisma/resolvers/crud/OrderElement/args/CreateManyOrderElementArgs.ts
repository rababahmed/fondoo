import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementCreateManyInput } from "../../../inputs/OrderElementCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrderElementArgs {
  @TypeGraphQL.Field(_type => [OrderElementCreateManyInput], {
    nullable: false
  })
  data!: OrderElementCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
