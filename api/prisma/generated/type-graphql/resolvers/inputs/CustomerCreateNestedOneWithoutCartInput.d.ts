import { CustomerCreateOrConnectWithoutCartInput } from "../inputs/CustomerCreateOrConnectWithoutCartInput";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutCartInput {
    create?: CustomerCreateWithoutCartInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutCartInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
