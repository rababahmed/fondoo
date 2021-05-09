import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementAvgAggregate } from "../outputs/OrderElementAvgAggregate";
import { OrderElementCountAggregate } from "../outputs/OrderElementCountAggregate";
import { OrderElementMaxAggregate } from "../outputs/OrderElementMaxAggregate";
import { OrderElementMinAggregate } from "../outputs/OrderElementMinAggregate";
import { OrderElementSumAggregate } from "../outputs/OrderElementSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OrderElementGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addonText!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productCategoryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => OrderElementCountAggregate, {
    nullable: true
  })
  count!: OrderElementCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementAvgAggregate, {
    nullable: true
  })
  avg!: OrderElementAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementSumAggregate, {
    nullable: true
  })
  sum!: OrderElementSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementMinAggregate, {
    nullable: true
  })
  min!: OrderElementMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementMaxAggregate, {
    nullable: true
  })
  max!: OrderElementMaxAggregate | null;
}
