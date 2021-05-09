import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;
}
