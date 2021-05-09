import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByScheduleArgs } from "./args/GroupByScheduleArgs";
import { Schedule } from "../../../models/Schedule";
import { ScheduleGroupBy } from "../../outputs/ScheduleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedule)
export class GroupByScheduleResolver {
  @TypeGraphQL.Query(_returns => [ScheduleGroupBy], {
    nullable: false
  })
  async groupBySchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByScheduleArgs): Promise<ScheduleGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).schedule.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
