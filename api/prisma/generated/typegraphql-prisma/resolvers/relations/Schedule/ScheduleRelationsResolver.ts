import * as TypeGraphQL from "type-graphql";
import { Restaurant } from "../../../models/Restaurant";
import { Schedule } from "../../../models/Schedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedule)
export class ScheduleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async Restaurant(@TypeGraphQL.Root() schedule: Schedule, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).schedule.findUnique({
      where: {
        id: schedule.id,
      },
    }).Restaurant({});
  }
}
