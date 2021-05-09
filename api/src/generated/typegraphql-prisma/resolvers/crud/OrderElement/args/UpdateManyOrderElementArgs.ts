import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementUpdateManyMutationInput } from "../../../inputs/OrderElementUpdateManyMutationInput";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderElementUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  where?: OrderElementWhereInput | undefined;
}
