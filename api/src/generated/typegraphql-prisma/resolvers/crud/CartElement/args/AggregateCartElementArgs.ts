import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementOrderByInput } from "../../../inputs/CartElementOrderByInput";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";
import { CartElementWhereUniqueInput } from "../../../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  where?: CartElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartElementOrderByInput], {
    nullable: true
  })
  orderBy?: CartElementOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: true
  })
  cursor?: CartElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
