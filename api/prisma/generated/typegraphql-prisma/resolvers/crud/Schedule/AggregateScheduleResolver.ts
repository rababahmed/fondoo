import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateScheduleArgs } from "./args/AggregateScheduleArgs";
import { Schedule } from "../../../models/Schedule";
import { AggregateSchedule } from "../../outputs/AggregateSchedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedule)
export class AggregateScheduleResolver {
  @TypeGraphQL.Query(_returns => AggregateSchedule, {
    nullable: false
  })
  async aggregateSchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateScheduleArgs): Promise<AggregateSchedule> {
    return getPrismaFromContext(ctx).schedule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
