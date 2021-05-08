import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementCreateInput } from "../../../inputs/OrderElementCreateInput";
import { OrderElementUpdateInput } from "../../../inputs/OrderElementUpdateInput";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: false
  })
  where!: OrderElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderElementCreateInput, {
    nullable: false
  })
  create!: OrderElementCreateInput;

  @TypeGraphQL.Field(_type => OrderElementUpdateInput, {
    nullable: false
  })
  update!: OrderElementUpdateInput;
}
