import { CustomerCreateOrConnectWithoutRestaurantsInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantsInput";
import { CustomerCreateWithoutRestaurantsInput } from "../inputs/CustomerCreateWithoutRestaurantsInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedManyWithoutRestaurantsInput {
    create?: CustomerCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantsInput[] | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
}
