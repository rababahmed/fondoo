import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementOrderByInput } from "../../../inputs/OrderElementOrderByInput";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";
import { OrderElementWhereUniqueInput } from "../../../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  where?: OrderElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderElementOrderByInput], {
    nullable: true
  })
  orderBy?: OrderElementOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderElementWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
