import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
import { OrderScalarFieldEnum } from "../../../../enums/OrderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderOrderByInput], {
    nullable: true
  })
  orderBy?: OrderOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "charges" | "total" | "isAccepted" | "restaurantId" | "customerId" | "customerAddressId" | "createdAt" | "updatedAt"> | undefined;
}
