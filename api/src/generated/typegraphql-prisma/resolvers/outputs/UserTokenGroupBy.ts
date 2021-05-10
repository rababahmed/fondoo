import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenAvgAggregate } from "../outputs/UserTokenAvgAggregate";
import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";
import { UserTokenSumAggregate } from "../outputs/UserTokenSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserTokenGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => UserTokenCountAggregate, {
    nullable: true
  })
  count!: UserTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenAvgAggregate, {
    nullable: true
  })
  avg!: UserTokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenSumAggregate, {
    nullable: true
  })
  sum!: UserTokenSumAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenMinAggregate, {
    nullable: true
  })
  min!: UserTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenMaxAggregate, {
    nullable: true
  })
  max!: UserTokenMaxAggregate | null;
}
