import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementCreateInput } from "../../../inputs/OrderElementCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementCreateInput, {
    nullable: false
  })
  data!: OrderElementCreateInput;
}
