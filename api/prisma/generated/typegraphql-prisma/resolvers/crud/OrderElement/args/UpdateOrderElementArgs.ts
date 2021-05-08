import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementUpdateInput } from "../../../inputs/OrderElementUpdateInput";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementUpdateInput, {
    nullable: false
  })
  data!: OrderElementUpdateInput;

  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;
}
