import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
export declare class AggregateRestaurantArgs {
    where?: RestaurantWhereInput | undefined;
    orderBy?: RestaurantOrderByInput[] | undefined;
    cursor?: RestaurantWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
