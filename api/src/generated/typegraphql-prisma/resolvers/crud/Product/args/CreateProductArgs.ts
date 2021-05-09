import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCreateInput } from "../../../inputs/ProductCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductArgs {
  @TypeGraphQL.Field(_type => ProductCreateInput, {
    nullable: false
  })
  data!: ProductCreateInput;
}
