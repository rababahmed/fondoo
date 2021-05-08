import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  where?: OrderElementWhereInput | undefined;
}
