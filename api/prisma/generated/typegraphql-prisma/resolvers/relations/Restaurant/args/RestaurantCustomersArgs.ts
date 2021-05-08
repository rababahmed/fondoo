import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RestaurantCustomersArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "firstName" | "lastName" | "email" | "password" | "phone" | "restaurantId" | "updatedAt"> | undefined;
}
