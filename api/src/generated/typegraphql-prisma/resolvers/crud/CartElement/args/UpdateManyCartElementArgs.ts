import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementUpdateManyMutationInput } from "../../../inputs/CartElementUpdateManyMutationInput";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartElementUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  where?: CartElementWhereInput | undefined;
}
