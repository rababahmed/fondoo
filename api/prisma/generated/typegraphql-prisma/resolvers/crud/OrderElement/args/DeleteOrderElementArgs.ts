import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;
}
