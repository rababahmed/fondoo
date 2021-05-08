import { RestaurantCreateInput } from "../../../inputs/RestaurantCreateInput";
import { RestaurantUpdateInput } from "../../../inputs/RestaurantUpdateInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
export declare class UpsertRestaurantArgs {
    where: RestaurantWhereUniqueInput;
    create: RestaurantCreateInput;
    update: RestaurantUpdateInput;
}
