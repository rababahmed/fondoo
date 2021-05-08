import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertScheduleArgs } from "./args/UpsertScheduleArgs";
import { Schedule } from "../../../models/Schedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedule)
export class UpsertScheduleResolver {
  @TypeGraphQL.Mutation(_returns => Schedule, {
    nullable: false
  })
  async upsertSchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertScheduleArgs): Promise<Schedule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).schedule.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
