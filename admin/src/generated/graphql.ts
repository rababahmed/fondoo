import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCustomer = {
  __typename?: 'AggregateCustomer';
  count?: Maybe<CustomerCountAggregate>;
  avg?: Maybe<CustomerAvgAggregate>;
  sum?: Maybe<CustomerSumAggregate>;
  min?: Maybe<CustomerMinAggregate>;
  max?: Maybe<CustomerMaxAggregate>;
};

export type AggregateCustomerAddress = {
  __typename?: 'AggregateCustomerAddress';
  count?: Maybe<CustomerAddressCountAggregate>;
  avg?: Maybe<CustomerAddressAvgAggregate>;
  sum?: Maybe<CustomerAddressSumAggregate>;
  min?: Maybe<CustomerAddressMinAggregate>;
  max?: Maybe<CustomerAddressMaxAggregate>;
};

export type AggregateCustomerToken = {
  __typename?: 'AggregateCustomerToken';
  count?: Maybe<CustomerTokenCountAggregate>;
  avg?: Maybe<CustomerTokenAvgAggregate>;
  sum?: Maybe<CustomerTokenSumAggregate>;
  min?: Maybe<CustomerTokenMinAggregate>;
  max?: Maybe<CustomerTokenMaxAggregate>;
};

export type AggregateDeliveryZone = {
  __typename?: 'AggregateDeliveryZone';
  count?: Maybe<DeliveryZoneCountAggregate>;
  avg?: Maybe<DeliveryZoneAvgAggregate>;
  sum?: Maybe<DeliveryZoneSumAggregate>;
  min?: Maybe<DeliveryZoneMinAggregate>;
  max?: Maybe<DeliveryZoneMaxAggregate>;
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder';
  count?: Maybe<OrderCountAggregate>;
  avg?: Maybe<OrderAvgAggregate>;
  sum?: Maybe<OrderSumAggregate>;
  min?: Maybe<OrderMinAggregate>;
  max?: Maybe<OrderMaxAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  count?: Maybe<ProductCountAggregate>;
  avg?: Maybe<ProductAvgAggregate>;
  sum?: Maybe<ProductSumAggregate>;
  min?: Maybe<ProductMinAggregate>;
  max?: Maybe<ProductMaxAggregate>;
};

export type AggregateProductCategory = {
  __typename?: 'AggregateProductCategory';
  count?: Maybe<ProductCategoryCountAggregate>;
  min?: Maybe<ProductCategoryMinAggregate>;
  max?: Maybe<ProductCategoryMaxAggregate>;
};

export type AggregateRestaurant = {
  __typename?: 'AggregateRestaurant';
  count?: Maybe<RestaurantCountAggregate>;
  min?: Maybe<RestaurantMinAggregate>;
  max?: Maybe<RestaurantMaxAggregate>;
};

export type AggregateSchedule = {
  __typename?: 'AggregateSchedule';
  count?: Maybe<ScheduleCountAggregate>;
  avg?: Maybe<ScheduleAvgAggregate>;
  sum?: Maybe<ScheduleSumAggregate>;
  min?: Maybe<ScheduleMinAggregate>;
  max?: Maybe<ScheduleMaxAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type AggregateUserToken = {
  __typename?: 'AggregateUserToken';
  count?: Maybe<UserTokenCountAggregate>;
  avg?: Maybe<UserTokenAvgAggregate>;
  sum?: Maybe<UserTokenSumAggregate>;
  min?: Maybe<UserTokenMinAggregate>;
  max?: Maybe<UserTokenMaxAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedBoolNullableFilter>;
  max?: Maybe<NestedBoolNullableFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  token: Array<CustomerToken>;
  address: Array<CustomerAddress>;
  orders: Array<Order>;
  Restaurant?: Maybe<Restaurant>;
};


export type CustomerTokenArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
  orderBy?: Maybe<Array<CustomerTokenOrderByInput>>;
  cursor?: Maybe<CustomerTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerTokenScalarFieldEnum>>;
};


export type CustomerAddressArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
  orderBy?: Maybe<Array<CustomerAddressOrderByInput>>;
  cursor?: Maybe<CustomerAddressWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerAddressScalarFieldEnum>>;
};


export type CustomerOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  Customer?: Maybe<Customer>;
  Order: Array<Order>;
};


export type CustomerAddressOrderArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};

export type CustomerAddressAvgAggregate = {
  __typename?: 'CustomerAddressAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['Float']>;
};

export type CustomerAddressCountAggregate = {
  __typename?: 'CustomerAddressCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  streetAddress: Scalars['Int'];
  city: Scalars['Int'];
  postCode: Scalars['Int'];
  country: Scalars['Int'];
  customerId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CustomerAddressCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  Customer?: Maybe<CustomerCreateNestedOneWithoutAddressInput>;
  Order?: Maybe<OrderCreateNestedManyWithoutCustomerAddressInput>;
};

export type CustomerAddressCreateManyCustomerInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
};

export type CustomerAddressCreateManyCustomerInputEnvelope = {
  data: Array<CustomerAddressCreateManyCustomerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CustomerAddressCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerAddressCreateNestedManyWithoutCustomerInput = {
  create?: Maybe<Array<CustomerAddressCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<CustomerAddressCreateOrConnectWithoutCustomerInput>>;
  createMany?: Maybe<CustomerAddressCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<CustomerAddressWhereUniqueInput>>;
};

export type CustomerAddressCreateNestedOneWithoutOrderInput = {
  create?: Maybe<CustomerAddressCreateWithoutOrderInput>;
  connectOrCreate?: Maybe<CustomerAddressCreateOrConnectWithoutOrderInput>;
  connect?: Maybe<CustomerAddressWhereUniqueInput>;
};

export type CustomerAddressCreateOrConnectWithoutCustomerInput = {
  where: CustomerAddressWhereUniqueInput;
  create: CustomerAddressCreateWithoutCustomerInput;
};

export type CustomerAddressCreateOrConnectWithoutOrderInput = {
  where: CustomerAddressWhereUniqueInput;
  create: CustomerAddressCreateWithoutOrderInput;
};

export type CustomerAddressCreateWithoutCustomerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  Order?: Maybe<OrderCreateNestedManyWithoutCustomerAddressInput>;
};

export type CustomerAddressCreateWithoutOrderInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  Customer?: Maybe<CustomerCreateNestedOneWithoutAddressInput>;
};

export type CustomerAddressGroupBy = {
  __typename?: 'CustomerAddressGroupBy';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postCode: Scalars['String'];
  country: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  count?: Maybe<CustomerAddressCountAggregate>;
  avg?: Maybe<CustomerAddressAvgAggregate>;
  sum?: Maybe<CustomerAddressSumAggregate>;
  min?: Maybe<CustomerAddressMinAggregate>;
  max?: Maybe<CustomerAddressMaxAggregate>;
};

export type CustomerAddressListRelationFilter = {
  every?: Maybe<CustomerAddressWhereInput>;
  some?: Maybe<CustomerAddressWhereInput>;
  none?: Maybe<CustomerAddressWhereInput>;
};

export type CustomerAddressMaxAggregate = {
  __typename?: 'CustomerAddressMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerAddressMinAggregate = {
  __typename?: 'CustomerAddressMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  streetAddress?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerAddressOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  streetAddress?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  postCode?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  customerId?: Maybe<SortOrder>;
};

export type CustomerAddressRelationFilter = {
  is?: Maybe<CustomerAddressWhereInput>;
  isNot?: Maybe<CustomerAddressWhereInput>;
};

export enum CustomerAddressScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  StreetAddress = 'streetAddress',
  City = 'city',
  PostCode = 'postCode',
  Country = 'country',
  CustomerId = 'customerId'
}

export type CustomerAddressScalarWhereInput = {
  AND?: Maybe<Array<CustomerAddressScalarWhereInput>>;
  OR?: Maybe<Array<CustomerAddressScalarWhereInput>>;
  NOT?: Maybe<Array<CustomerAddressScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  streetAddress?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  postCode?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  customerId?: Maybe<IntNullableFilter>;
};

export type CustomerAddressScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CustomerAddressScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CustomerAddressScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CustomerAddressScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  streetAddress?: Maybe<StringWithAggregatesFilter>;
  city?: Maybe<StringWithAggregatesFilter>;
  postCode?: Maybe<StringWithAggregatesFilter>;
  country?: Maybe<StringWithAggregatesFilter>;
  customerId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type CustomerAddressSumAggregate = {
  __typename?: 'CustomerAddressSumAggregate';
  id?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerAddressUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  streetAddress?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  postCode?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutAddressInput>;
  Order?: Maybe<OrderUpdateManyWithoutCustomerAddressInput>;
};

export type CustomerAddressUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  streetAddress?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  postCode?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CustomerAddressUpdateManyWithWhereWithoutCustomerInput = {
  where: CustomerAddressScalarWhereInput;
  data: CustomerAddressUpdateManyMutationInput;
};

export type CustomerAddressUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<CustomerAddressCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<CustomerAddressCreateOrConnectWithoutCustomerInput>>;
  upsert?: Maybe<Array<CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput>>;
  createMany?: Maybe<CustomerAddressCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<CustomerAddressWhereUniqueInput>>;
  set?: Maybe<Array<CustomerAddressWhereUniqueInput>>;
  disconnect?: Maybe<Array<CustomerAddressWhereUniqueInput>>;
  delete?: Maybe<Array<CustomerAddressWhereUniqueInput>>;
  update?: Maybe<Array<CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<CustomerAddressUpdateManyWithWhereWithoutCustomerInput>>;
  deleteMany?: Maybe<Array<CustomerAddressScalarWhereInput>>;
};

export type CustomerAddressUpdateOneWithoutOrderInput = {
  create?: Maybe<CustomerAddressCreateWithoutOrderInput>;
  connectOrCreate?: Maybe<CustomerAddressCreateOrConnectWithoutOrderInput>;
  upsert?: Maybe<CustomerAddressUpsertWithoutOrderInput>;
  connect?: Maybe<CustomerAddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerAddressUpdateWithoutOrderInput>;
};

export type CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput = {
  where: CustomerAddressWhereUniqueInput;
  data: CustomerAddressUpdateWithoutCustomerInput;
};

export type CustomerAddressUpdateWithoutCustomerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  streetAddress?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  postCode?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  Order?: Maybe<OrderUpdateManyWithoutCustomerAddressInput>;
};

export type CustomerAddressUpdateWithoutOrderInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  streetAddress?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  postCode?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutAddressInput>;
};

export type CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput = {
  where: CustomerAddressWhereUniqueInput;
  update: CustomerAddressUpdateWithoutCustomerInput;
  create: CustomerAddressCreateWithoutCustomerInput;
};

export type CustomerAddressUpsertWithoutOrderInput = {
  update: CustomerAddressUpdateWithoutOrderInput;
  create: CustomerAddressCreateWithoutOrderInput;
};

export type CustomerAddressWhereInput = {
  AND?: Maybe<Array<CustomerAddressWhereInput>>;
  OR?: Maybe<Array<CustomerAddressWhereInput>>;
  NOT?: Maybe<Array<CustomerAddressWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  streetAddress?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  postCode?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  Customer?: Maybe<CustomerRelationFilter>;
  customerId?: Maybe<IntNullableFilter>;
  Order?: Maybe<OrderListRelationFilter>;
};

export type CustomerAddressWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CustomerAvgAggregate = {
  __typename?: 'CustomerAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CustomerCountAggregate = {
  __typename?: 'CustomerCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  lastName: Scalars['Int'];
  email: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  restaurantId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CustomerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<CustomerTokenCreateNestedManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressCreateNestedManyWithoutCustomerInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutCustomersInput>;
};

export type CustomerCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerCreateManyRestaurantInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerCreateManyRestaurantInputEnvelope = {
  data: Array<CustomerCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CustomerCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<CustomerCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<CustomerCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<CustomerCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
};

export type CustomerCreateNestedOneWithoutAddressInput = {
  create?: Maybe<CustomerCreateWithoutAddressInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutAddressInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
};

export type CustomerCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<CustomerCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
};

export type CustomerCreateNestedOneWithoutTokenInput = {
  create?: Maybe<CustomerCreateWithoutTokenInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutTokenInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
};

export type CustomerCreateOrConnectWithoutAddressInput = {
  where: CustomerWhereUniqueInput;
  create: CustomerCreateWithoutAddressInput;
};

export type CustomerCreateOrConnectWithoutOrdersInput = {
  where: CustomerWhereUniqueInput;
  create: CustomerCreateWithoutOrdersInput;
};

export type CustomerCreateOrConnectWithoutRestaurantInput = {
  where: CustomerWhereUniqueInput;
  create: CustomerCreateWithoutRestaurantInput;
};

export type CustomerCreateOrConnectWithoutTokenInput = {
  where: CustomerWhereUniqueInput;
  create: CustomerCreateWithoutTokenInput;
};

export type CustomerCreateWithoutAddressInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<CustomerTokenCreateNestedManyWithoutCustomerInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutCustomersInput>;
};

export type CustomerCreateWithoutOrdersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<CustomerTokenCreateNestedManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressCreateNestedManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutCustomersInput>;
};

export type CustomerCreateWithoutRestaurantInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<CustomerTokenCreateNestedManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressCreateNestedManyWithoutCustomerInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCustomerInput>;
};

export type CustomerCreateWithoutTokenInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<CustomerAddressCreateNestedManyWithoutCustomerInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutCustomersInput>;
};

export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  count?: Maybe<CustomerCountAggregate>;
  avg?: Maybe<CustomerAvgAggregate>;
  sum?: Maybe<CustomerSumAggregate>;
  min?: Maybe<CustomerMinAggregate>;
  max?: Maybe<CustomerMaxAggregate>;
};

export type CustomerListRelationFilter = {
  every?: Maybe<CustomerWhereInput>;
  some?: Maybe<CustomerWhereInput>;
  none?: Maybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  __typename?: 'CustomerMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerMinAggregate = {
  __typename?: 'CustomerMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CustomerRelationFilter = {
  is?: Maybe<CustomerWhereInput>;
  isNot?: Maybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Password = 'password',
  Phone = 'phone',
  RestaurantId = 'restaurantId',
  UpdatedAt = 'updatedAt'
}

export type CustomerScalarWhereInput = {
  AND?: Maybe<Array<CustomerScalarWhereInput>>;
  OR?: Maybe<Array<CustomerScalarWhereInput>>;
  NOT?: Maybe<Array<CustomerScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  phone?: Maybe<StringFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CustomerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  phone?: Maybe<StringWithAggregatesFilter>;
  restaurantId?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CustomerSumAggregate = {
  __typename?: 'CustomerSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CustomerToken = {
  __typename?: 'CustomerToken';
  id: Scalars['Int'];
  token: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  customerId?: Maybe<Scalars['Int']>;
  Customer?: Maybe<Customer>;
};

export type CustomerTokenAvgAggregate = {
  __typename?: 'CustomerTokenAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['Float']>;
};

export type CustomerTokenCountAggregate = {
  __typename?: 'CustomerTokenCountAggregate';
  id: Scalars['Int'];
  token: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  customerId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CustomerTokenCreateInput = {
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Customer?: Maybe<CustomerCreateNestedOneWithoutTokenInput>;
};

export type CustomerTokenCreateManyCustomerInput = {
  id?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerTokenCreateManyCustomerInputEnvelope = {
  data: Array<CustomerTokenCreateManyCustomerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CustomerTokenCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerTokenCreateNestedManyWithoutCustomerInput = {
  create?: Maybe<Array<CustomerTokenCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<CustomerTokenCreateOrConnectWithoutCustomerInput>>;
  createMany?: Maybe<CustomerTokenCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<CustomerTokenWhereUniqueInput>>;
};

export type CustomerTokenCreateOrConnectWithoutCustomerInput = {
  where: CustomerTokenWhereUniqueInput;
  create: CustomerTokenCreateWithoutCustomerInput;
};

export type CustomerTokenCreateWithoutCustomerInput = {
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerTokenGroupBy = {
  __typename?: 'CustomerTokenGroupBy';
  id: Scalars['Int'];
  token: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  customerId?: Maybe<Scalars['Int']>;
  count?: Maybe<CustomerTokenCountAggregate>;
  avg?: Maybe<CustomerTokenAvgAggregate>;
  sum?: Maybe<CustomerTokenSumAggregate>;
  min?: Maybe<CustomerTokenMinAggregate>;
  max?: Maybe<CustomerTokenMaxAggregate>;
};

export type CustomerTokenListRelationFilter = {
  every?: Maybe<CustomerTokenWhereInput>;
  some?: Maybe<CustomerTokenWhereInput>;
  none?: Maybe<CustomerTokenWhereInput>;
};

export type CustomerTokenMaxAggregate = {
  __typename?: 'CustomerTokenMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerTokenMinAggregate = {
  __typename?: 'CustomerTokenMinAggregate';
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerTokenOrderByInput = {
  id?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  customerId?: Maybe<SortOrder>;
};

export enum CustomerTokenScalarFieldEnum {
  Id = 'id',
  Token = 'token',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  CustomerId = 'customerId'
}

export type CustomerTokenScalarWhereInput = {
  AND?: Maybe<Array<CustomerTokenScalarWhereInput>>;
  OR?: Maybe<Array<CustomerTokenScalarWhereInput>>;
  NOT?: Maybe<Array<CustomerTokenScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  customerId?: Maybe<IntNullableFilter>;
};

export type CustomerTokenScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CustomerTokenScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CustomerTokenScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CustomerTokenScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  customerId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type CustomerTokenSumAggregate = {
  __typename?: 'CustomerTokenSumAggregate';
  id?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type CustomerTokenUpdateInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutTokenInput>;
};

export type CustomerTokenUpdateManyMutationInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CustomerTokenUpdateManyWithWhereWithoutCustomerInput = {
  where: CustomerTokenScalarWhereInput;
  data: CustomerTokenUpdateManyMutationInput;
};

export type CustomerTokenUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<CustomerTokenCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<CustomerTokenCreateOrConnectWithoutCustomerInput>>;
  upsert?: Maybe<Array<CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput>>;
  createMany?: Maybe<CustomerTokenCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<CustomerTokenWhereUniqueInput>>;
  set?: Maybe<Array<CustomerTokenWhereUniqueInput>>;
  disconnect?: Maybe<Array<CustomerTokenWhereUniqueInput>>;
  delete?: Maybe<Array<CustomerTokenWhereUniqueInput>>;
  update?: Maybe<Array<CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<CustomerTokenUpdateManyWithWhereWithoutCustomerInput>>;
  deleteMany?: Maybe<Array<CustomerTokenScalarWhereInput>>;
};

export type CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput = {
  where: CustomerTokenWhereUniqueInput;
  data: CustomerTokenUpdateWithoutCustomerInput;
};

export type CustomerTokenUpdateWithoutCustomerInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput = {
  where: CustomerTokenWhereUniqueInput;
  update: CustomerTokenUpdateWithoutCustomerInput;
  create: CustomerTokenCreateWithoutCustomerInput;
};

export type CustomerTokenWhereInput = {
  AND?: Maybe<Array<CustomerTokenWhereInput>>;
  OR?: Maybe<Array<CustomerTokenWhereInput>>;
  NOT?: Maybe<Array<CustomerTokenWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Customer?: Maybe<CustomerRelationFilter>;
  customerId?: Maybe<IntNullableFilter>;
};

export type CustomerTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CustomerUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<CustomerTokenUpdateManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressUpdateManyWithoutCustomerInput>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutCustomersInput>;
};

export type CustomerUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CustomerUpdateManyWithWhereWithoutRestaurantInput = {
  where: CustomerScalarWhereInput;
  data: CustomerUpdateManyMutationInput;
};

export type CustomerUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<CustomerCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<CustomerCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<CustomerUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<CustomerCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
  set?: Maybe<Array<CustomerWhereUniqueInput>>;
  disconnect?: Maybe<Array<CustomerWhereUniqueInput>>;
  delete?: Maybe<Array<CustomerWhereUniqueInput>>;
  update?: Maybe<Array<CustomerUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<CustomerUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<CustomerScalarWhereInput>>;
};

export type CustomerUpdateOneWithoutAddressInput = {
  create?: Maybe<CustomerCreateWithoutAddressInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutAddressInput>;
  upsert?: Maybe<CustomerUpsertWithoutAddressInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerUpdateWithoutAddressInput>;
};

export type CustomerUpdateOneWithoutOrdersInput = {
  create?: Maybe<CustomerCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<CustomerUpsertWithoutOrdersInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerUpdateWithoutOrdersInput>;
};

export type CustomerUpdateOneWithoutTokenInput = {
  create?: Maybe<CustomerCreateWithoutTokenInput>;
  connectOrCreate?: Maybe<CustomerCreateOrConnectWithoutTokenInput>;
  upsert?: Maybe<CustomerUpsertWithoutTokenInput>;
  connect?: Maybe<CustomerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerUpdateWithoutTokenInput>;
};

export type CustomerUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: CustomerWhereUniqueInput;
  data: CustomerUpdateWithoutRestaurantInput;
};

export type CustomerUpdateWithoutAddressInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<CustomerTokenUpdateManyWithoutCustomerInput>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutCustomersInput>;
};

export type CustomerUpdateWithoutOrdersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<CustomerTokenUpdateManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressUpdateManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutCustomersInput>;
};

export type CustomerUpdateWithoutRestaurantInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<CustomerTokenUpdateManyWithoutCustomerInput>;
  address?: Maybe<CustomerAddressUpdateManyWithoutCustomerInput>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
};

export type CustomerUpdateWithoutTokenInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<CustomerAddressUpdateManyWithoutCustomerInput>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutCustomersInput>;
};

export type CustomerUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: CustomerWhereUniqueInput;
  update: CustomerUpdateWithoutRestaurantInput;
  create: CustomerCreateWithoutRestaurantInput;
};

export type CustomerUpsertWithoutAddressInput = {
  update: CustomerUpdateWithoutAddressInput;
  create: CustomerCreateWithoutAddressInput;
};

export type CustomerUpsertWithoutOrdersInput = {
  update: CustomerUpdateWithoutOrdersInput;
  create: CustomerCreateWithoutOrdersInput;
};

export type CustomerUpsertWithoutTokenInput = {
  update: CustomerUpdateWithoutTokenInput;
  create: CustomerCreateWithoutTokenInput;
};

export type CustomerWhereInput = {
  AND?: Maybe<Array<CustomerWhereInput>>;
  OR?: Maybe<Array<CustomerWhereInput>>;
  NOT?: Maybe<Array<CustomerWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  phone?: Maybe<StringFilter>;
  token?: Maybe<CustomerTokenListRelationFilter>;
  address?: Maybe<CustomerAddressListRelationFilter>;
  orders?: Maybe<OrderListRelationFilter>;
  Restaurant?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CustomerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export enum DeliveryFee {
  Fixed = 'Fixed',
  Percent = 'Percent'
}

export type DeliveryZone = {
  __typename?: 'DeliveryZone';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType: DeliveryFee;
  deliveryCharge: Scalars['Int'];
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
  Restaurant?: Maybe<Restaurant>;
};

export type DeliveryZoneAvgAggregate = {
  __typename?: 'DeliveryZoneAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  deliveryCharge?: Maybe<Scalars['Float']>;
  minDeliveryAmount?: Maybe<Scalars['Float']>;
  minDeliveryRadius?: Maybe<Scalars['Float']>;
  maxDeliveryRadius?: Maybe<Scalars['Float']>;
};

export type DeliveryZoneCountAggregate = {
  __typename?: 'DeliveryZoneCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  zoneTitle: Scalars['Int'];
  zonePostCode: Scalars['Int'];
  deliveryFeeType: Scalars['Int'];
  deliveryCharge: Scalars['Int'];
  minDeliveryAmount: Scalars['Int'];
  minDeliveryRadius: Scalars['Int'];
  maxDeliveryRadius: Scalars['Int'];
  restaurantId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type DeliveryZoneCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutDeliveryZonesInput>;
};

export type DeliveryZoneCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type DeliveryZoneCreateManyRestaurantInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
};

export type DeliveryZoneCreateManyRestaurantInputEnvelope = {
  data: Array<DeliveryZoneCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type DeliveryZoneCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<DeliveryZoneCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<DeliveryZoneCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<DeliveryZoneCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<DeliveryZoneWhereUniqueInput>>;
};

export type DeliveryZoneCreateOrConnectWithoutRestaurantInput = {
  where: DeliveryZoneWhereUniqueInput;
  create: DeliveryZoneCreateWithoutRestaurantInput;
};

export type DeliveryZoneCreateWithoutRestaurantInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
};

export type DeliveryZoneGroupBy = {
  __typename?: 'DeliveryZoneGroupBy';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  zoneTitle: Scalars['String'];
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType: DeliveryFee;
  deliveryCharge: Scalars['Int'];
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
  count?: Maybe<DeliveryZoneCountAggregate>;
  avg?: Maybe<DeliveryZoneAvgAggregate>;
  sum?: Maybe<DeliveryZoneSumAggregate>;
  min?: Maybe<DeliveryZoneMinAggregate>;
  max?: Maybe<DeliveryZoneMaxAggregate>;
};

export type DeliveryZoneListRelationFilter = {
  every?: Maybe<DeliveryZoneWhereInput>;
  some?: Maybe<DeliveryZoneWhereInput>;
  none?: Maybe<DeliveryZoneWhereInput>;
};

export type DeliveryZoneMaxAggregate = {
  __typename?: 'DeliveryZoneMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle?: Maybe<Scalars['String']>;
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type DeliveryZoneMinAggregate = {
  __typename?: 'DeliveryZoneMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  zoneTitle?: Maybe<Scalars['String']>;
  zonePostCode?: Maybe<Scalars['String']>;
  deliveryFeeType?: Maybe<DeliveryFee>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type DeliveryZoneOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  zoneTitle?: Maybe<SortOrder>;
  zonePostCode?: Maybe<SortOrder>;
  deliveryFeeType?: Maybe<SortOrder>;
  deliveryCharge?: Maybe<SortOrder>;
  minDeliveryAmount?: Maybe<SortOrder>;
  minDeliveryRadius?: Maybe<SortOrder>;
  maxDeliveryRadius?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
};

export enum DeliveryZoneScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  ZoneTitle = 'zoneTitle',
  ZonePostCode = 'zonePostCode',
  DeliveryFeeType = 'deliveryFeeType',
  DeliveryCharge = 'deliveryCharge',
  MinDeliveryAmount = 'minDeliveryAmount',
  MinDeliveryRadius = 'minDeliveryRadius',
  MaxDeliveryRadius = 'maxDeliveryRadius',
  RestaurantId = 'restaurantId'
}

export type DeliveryZoneScalarWhereInput = {
  AND?: Maybe<Array<DeliveryZoneScalarWhereInput>>;
  OR?: Maybe<Array<DeliveryZoneScalarWhereInput>>;
  NOT?: Maybe<Array<DeliveryZoneScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  zoneTitle?: Maybe<StringFilter>;
  zonePostCode?: Maybe<StringNullableFilter>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeFilter>;
  deliveryCharge?: Maybe<IntFilter>;
  minDeliveryAmount?: Maybe<IntNullableFilter>;
  minDeliveryRadius?: Maybe<IntNullableFilter>;
  maxDeliveryRadius?: Maybe<IntNullableFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type DeliveryZoneScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DeliveryZoneScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DeliveryZoneScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DeliveryZoneScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  zoneTitle?: Maybe<StringWithAggregatesFilter>;
  zonePostCode?: Maybe<StringNullableWithAggregatesFilter>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeWithAggregatesFilter>;
  deliveryCharge?: Maybe<IntWithAggregatesFilter>;
  minDeliveryAmount?: Maybe<IntNullableWithAggregatesFilter>;
  minDeliveryRadius?: Maybe<IntNullableWithAggregatesFilter>;
  maxDeliveryRadius?: Maybe<IntNullableWithAggregatesFilter>;
  restaurantId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type DeliveryZoneSumAggregate = {
  __typename?: 'DeliveryZoneSumAggregate';
  id?: Maybe<Scalars['Int']>;
  deliveryCharge?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  minDeliveryRadius?: Maybe<Scalars['Int']>;
  maxDeliveryRadius?: Maybe<Scalars['Int']>;
};

export type DeliveryZoneUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zoneTitle?: Maybe<StringFieldUpdateOperationsInput>;
  zonePostCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeFieldUpdateOperationsInput>;
  deliveryCharge?: Maybe<IntFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
  maxDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutDeliveryZonesInput>;
};

export type DeliveryZoneUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zoneTitle?: Maybe<StringFieldUpdateOperationsInput>;
  zonePostCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeFieldUpdateOperationsInput>;
  deliveryCharge?: Maybe<IntFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
  maxDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput = {
  where: DeliveryZoneScalarWhereInput;
  data: DeliveryZoneUpdateManyMutationInput;
};

export type DeliveryZoneUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<DeliveryZoneCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<DeliveryZoneCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<DeliveryZoneCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<DeliveryZoneWhereUniqueInput>>;
  set?: Maybe<Array<DeliveryZoneWhereUniqueInput>>;
  disconnect?: Maybe<Array<DeliveryZoneWhereUniqueInput>>;
  delete?: Maybe<Array<DeliveryZoneWhereUniqueInput>>;
  update?: Maybe<Array<DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<DeliveryZoneScalarWhereInput>>;
};

export type DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: DeliveryZoneWhereUniqueInput;
  data: DeliveryZoneUpdateWithoutRestaurantInput;
};

export type DeliveryZoneUpdateWithoutRestaurantInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zoneTitle?: Maybe<StringFieldUpdateOperationsInput>;
  zonePostCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeFieldUpdateOperationsInput>;
  deliveryCharge?: Maybe<IntFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
  maxDeliveryRadius?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: DeliveryZoneWhereUniqueInput;
  update: DeliveryZoneUpdateWithoutRestaurantInput;
  create: DeliveryZoneCreateWithoutRestaurantInput;
};

export type DeliveryZoneWhereInput = {
  AND?: Maybe<Array<DeliveryZoneWhereInput>>;
  OR?: Maybe<Array<DeliveryZoneWhereInput>>;
  NOT?: Maybe<Array<DeliveryZoneWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  zoneTitle?: Maybe<StringFilter>;
  zonePostCode?: Maybe<StringNullableFilter>;
  deliveryFeeType?: Maybe<EnumDeliveryFeeFilter>;
  deliveryCharge?: Maybe<IntFilter>;
  minDeliveryAmount?: Maybe<IntNullableFilter>;
  minDeliveryRadius?: Maybe<IntNullableFilter>;
  maxDeliveryRadius?: Maybe<IntNullableFilter>;
  Restaurant?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type DeliveryZoneWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type EnumDeliveryFeeFieldUpdateOperationsInput = {
  set?: Maybe<DeliveryFee>;
};

export type EnumDeliveryFeeFilter = {
  equals?: Maybe<DeliveryFee>;
  in?: Maybe<Array<DeliveryFee>>;
  notIn?: Maybe<Array<DeliveryFee>>;
  not?: Maybe<NestedEnumDeliveryFeeFilter>;
};

export type EnumDeliveryFeeWithAggregatesFilter = {
  equals?: Maybe<DeliveryFee>;
  in?: Maybe<Array<DeliveryFee>>;
  notIn?: Maybe<Array<DeliveryFee>>;
  not?: Maybe<NestedEnumDeliveryFeeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumDeliveryFeeFilter>;
  max?: Maybe<NestedEnumDeliveryFeeFilter>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type EnumRoleWithAggregatesFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumRoleFilter>;
  max?: Maybe<NestedEnumRoleFilter>;
};

export type EnumSpiceLevelFieldUpdateOperationsInput = {
  set?: Maybe<SpiceLevel>;
};

export type EnumSpiceLevelFilter = {
  equals?: Maybe<SpiceLevel>;
  in?: Maybe<Array<SpiceLevel>>;
  notIn?: Maybe<Array<SpiceLevel>>;
  not?: Maybe<NestedEnumSpiceLevelFilter>;
};

export type EnumSpiceLevelWithAggregatesFilter = {
  equals?: Maybe<SpiceLevel>;
  in?: Maybe<Array<SpiceLevel>>;
  notIn?: Maybe<Array<SpiceLevel>>;
  not?: Maybe<NestedEnumSpiceLevelWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumSpiceLevelFilter>;
  max?: Maybe<NestedEnumSpiceLevelFilter>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type FloatWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedFloatFilter>;
  min?: Maybe<NestedFloatFilter>;
  max?: Maybe<NestedFloatFilter>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type IntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};


export type JsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedJsonFilter>;
  max?: Maybe<NestedJsonFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createManyCustomer: AffectedRowsOutput;
  deleteCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
  deleteManyCustomer: AffectedRowsOutput;
  updateManyCustomer: AffectedRowsOutput;
  upsertCustomer: Customer;
  createCustomerAddress: CustomerAddress;
  createManyCustomerAddress: AffectedRowsOutput;
  deleteCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerAddress?: Maybe<CustomerAddress>;
  deleteManyCustomerAddress: AffectedRowsOutput;
  updateManyCustomerAddress: AffectedRowsOutput;
  upsertCustomerAddress: CustomerAddress;
  createCustomerToken: CustomerToken;
  createManyCustomerToken: AffectedRowsOutput;
  deleteCustomerToken?: Maybe<CustomerToken>;
  updateCustomerToken?: Maybe<CustomerToken>;
  deleteManyCustomerToken: AffectedRowsOutput;
  updateManyCustomerToken: AffectedRowsOutput;
  upsertCustomerToken: CustomerToken;
  createDeliveryZone: DeliveryZone;
  createManyDeliveryZone: AffectedRowsOutput;
  deleteDeliveryZone?: Maybe<DeliveryZone>;
  updateDeliveryZone?: Maybe<DeliveryZone>;
  deleteManyDeliveryZone: AffectedRowsOutput;
  updateManyDeliveryZone: AffectedRowsOutput;
  upsertDeliveryZone: DeliveryZone;
  createOrder: Order;
  createManyOrder: AffectedRowsOutput;
  deleteOrder?: Maybe<Order>;
  updateOrder?: Maybe<Order>;
  deleteManyOrder: AffectedRowsOutput;
  updateManyOrder: AffectedRowsOutput;
  upsertOrder: Order;
  createProduct: Product;
  createManyProduct: AffectedRowsOutput;
  deleteProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteManyProduct: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  upsertProduct: Product;
  createProductCategory: ProductCategory;
  createManyProductCategory: AffectedRowsOutput;
  deleteProductCategory?: Maybe<ProductCategory>;
  updateProductCategory?: Maybe<ProductCategory>;
  deleteManyProductCategory: AffectedRowsOutput;
  updateManyProductCategory: AffectedRowsOutput;
  upsertProductCategory: ProductCategory;
  createRestaurant: Restaurant;
  createManyRestaurant: AffectedRowsOutput;
  deleteRestaurant?: Maybe<Restaurant>;
  updateRestaurant?: Maybe<Restaurant>;
  deleteManyRestaurant: AffectedRowsOutput;
  updateManyRestaurant: AffectedRowsOutput;
  upsertRestaurant: Restaurant;
  createSchedule: Schedule;
  createManySchedule: AffectedRowsOutput;
  deleteSchedule?: Maybe<Schedule>;
  updateSchedule?: Maybe<Schedule>;
  deleteManySchedule: AffectedRowsOutput;
  updateManySchedule: AffectedRowsOutput;
  upsertSchedule: Schedule;
  createUser: User;
  createManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  createUserToken: UserToken;
  createManyUserToken: AffectedRowsOutput;
  deleteUserToken?: Maybe<UserToken>;
  updateUserToken?: Maybe<UserToken>;
  deleteManyUserToken: AffectedRowsOutput;
  updateManyUserToken: AffectedRowsOutput;
  upsertUserToken: UserToken;
};


export type MutationCreateCustomerArgs = {
  data: CustomerCreateInput;
};


export type MutationCreateManyCustomerArgs = {
  data: Array<CustomerCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationUpdateCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationDeleteManyCustomerArgs = {
  where?: Maybe<CustomerWhereInput>;
};


export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: Maybe<CustomerWhereInput>;
};


export type MutationUpsertCustomerArgs = {
  where: CustomerWhereUniqueInput;
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
};


export type MutationCreateCustomerAddressArgs = {
  data: CustomerAddressCreateInput;
};


export type MutationCreateManyCustomerAddressArgs = {
  data: Array<CustomerAddressCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCustomerAddressArgs = {
  where: CustomerAddressWhereUniqueInput;
};


export type MutationUpdateCustomerAddressArgs = {
  data: CustomerAddressUpdateInput;
  where: CustomerAddressWhereUniqueInput;
};


export type MutationDeleteManyCustomerAddressArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
};


export type MutationUpdateManyCustomerAddressArgs = {
  data: CustomerAddressUpdateManyMutationInput;
  where?: Maybe<CustomerAddressWhereInput>;
};


export type MutationUpsertCustomerAddressArgs = {
  where: CustomerAddressWhereUniqueInput;
  create: CustomerAddressCreateInput;
  update: CustomerAddressUpdateInput;
};


export type MutationCreateCustomerTokenArgs = {
  data: CustomerTokenCreateInput;
};


export type MutationCreateManyCustomerTokenArgs = {
  data: Array<CustomerTokenCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCustomerTokenArgs = {
  where: CustomerTokenWhereUniqueInput;
};


export type MutationUpdateCustomerTokenArgs = {
  data: CustomerTokenUpdateInput;
  where: CustomerTokenWhereUniqueInput;
};


export type MutationDeleteManyCustomerTokenArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
};


export type MutationUpdateManyCustomerTokenArgs = {
  data: CustomerTokenUpdateManyMutationInput;
  where?: Maybe<CustomerTokenWhereInput>;
};


export type MutationUpsertCustomerTokenArgs = {
  where: CustomerTokenWhereUniqueInput;
  create: CustomerTokenCreateInput;
  update: CustomerTokenUpdateInput;
};


export type MutationCreateDeliveryZoneArgs = {
  data: DeliveryZoneCreateInput;
};


export type MutationCreateManyDeliveryZoneArgs = {
  data: Array<DeliveryZoneCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteDeliveryZoneArgs = {
  where: DeliveryZoneWhereUniqueInput;
};


export type MutationUpdateDeliveryZoneArgs = {
  data: DeliveryZoneUpdateInput;
  where: DeliveryZoneWhereUniqueInput;
};


export type MutationDeleteManyDeliveryZoneArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
};


export type MutationUpdateManyDeliveryZoneArgs = {
  data: DeliveryZoneUpdateManyMutationInput;
  where?: Maybe<DeliveryZoneWhereInput>;
};


export type MutationUpsertDeliveryZoneArgs = {
  where: DeliveryZoneWhereUniqueInput;
  create: DeliveryZoneCreateInput;
  update: DeliveryZoneUpdateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateManyOrderArgs = {
  data: Array<OrderCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationDeleteManyOrderArgs = {
  where?: Maybe<OrderWhereInput>;
};


export type MutationUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: Maybe<OrderWhereInput>;
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput;
  create: OrderCreateInput;
  update: OrderUpdateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput;
  create: ProductCreateInput;
  update: ProductUpdateInput;
};


export type MutationCreateProductCategoryArgs = {
  data: ProductCategoryCreateInput;
};


export type MutationCreateManyProductCategoryArgs = {
  data: Array<ProductCategoryCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationDeleteManyProductCategoryArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
};


export type MutationUpdateManyProductCategoryArgs = {
  data: ProductCategoryUpdateManyMutationInput;
  where?: Maybe<ProductCategoryWhereInput>;
};


export type MutationUpsertProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateInput;
  update: ProductCategoryUpdateInput;
};


export type MutationCreateRestaurantArgs = {
  data: RestaurantCreateInput;
};


export type MutationCreateManyRestaurantArgs = {
  data: Array<RestaurantCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};


export type MutationUpdateRestaurantArgs = {
  data: RestaurantUpdateInput;
  where: RestaurantWhereUniqueInput;
};


export type MutationDeleteManyRestaurantArgs = {
  where?: Maybe<RestaurantWhereInput>;
};


export type MutationUpdateManyRestaurantArgs = {
  data: RestaurantUpdateManyMutationInput;
  where?: Maybe<RestaurantWhereInput>;
};


export type MutationUpsertRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateInput;
  update: RestaurantUpdateInput;
};


export type MutationCreateScheduleArgs = {
  data: ScheduleCreateInput;
};


export type MutationCreateManyScheduleArgs = {
  data: Array<ScheduleCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteScheduleArgs = {
  where: ScheduleWhereUniqueInput;
};


export type MutationUpdateScheduleArgs = {
  data: ScheduleUpdateInput;
  where: ScheduleWhereUniqueInput;
};


export type MutationDeleteManyScheduleArgs = {
  where?: Maybe<ScheduleWhereInput>;
};


export type MutationUpdateManyScheduleArgs = {
  data: ScheduleUpdateManyMutationInput;
  where?: Maybe<ScheduleWhereInput>;
};


export type MutationUpsertScheduleArgs = {
  where: ScheduleWhereUniqueInput;
  create: ScheduleCreateInput;
  update: ScheduleUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationCreateUserTokenArgs = {
  data: UserTokenCreateInput;
};


export type MutationCreateManyUserTokenArgs = {
  data: Array<UserTokenCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};


export type MutationUpdateUserTokenArgs = {
  data: UserTokenUpdateInput;
  where: UserTokenWhereUniqueInput;
};


export type MutationDeleteManyUserTokenArgs = {
  where?: Maybe<UserTokenWhereInput>;
};


export type MutationUpdateManyUserTokenArgs = {
  data: UserTokenUpdateManyMutationInput;
  where?: Maybe<UserTokenWhereInput>;
};


export type MutationUpsertUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
  create: UserTokenCreateInput;
  update: UserTokenUpdateInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedBoolNullableFilter>;
  max?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumDeliveryFeeFilter = {
  equals?: Maybe<DeliveryFee>;
  in?: Maybe<Array<DeliveryFee>>;
  notIn?: Maybe<Array<DeliveryFee>>;
  not?: Maybe<NestedEnumDeliveryFeeFilter>;
};

export type NestedEnumDeliveryFeeWithAggregatesFilter = {
  equals?: Maybe<DeliveryFee>;
  in?: Maybe<Array<DeliveryFee>>;
  notIn?: Maybe<Array<DeliveryFee>>;
  not?: Maybe<NestedEnumDeliveryFeeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumDeliveryFeeFilter>;
  max?: Maybe<NestedEnumDeliveryFeeFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumRoleFilter>;
  max?: Maybe<NestedEnumRoleFilter>;
};

export type NestedEnumSpiceLevelFilter = {
  equals?: Maybe<SpiceLevel>;
  in?: Maybe<Array<SpiceLevel>>;
  notIn?: Maybe<Array<SpiceLevel>>;
  not?: Maybe<NestedEnumSpiceLevelFilter>;
};

export type NestedEnumSpiceLevelWithAggregatesFilter = {
  equals?: Maybe<SpiceLevel>;
  in?: Maybe<Array<SpiceLevel>>;
  notIn?: Maybe<Array<SpiceLevel>>;
  not?: Maybe<NestedEnumSpiceLevelWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumSpiceLevelFilter>;
  max?: Maybe<NestedEnumSpiceLevelFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedFloatWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedFloatFilter>;
  min?: Maybe<NestedFloatFilter>;
  max?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
  restaurantId: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
  user: User;
  restaurant: Restaurant;
  Customer?: Maybe<Customer>;
  CustomerAddress?: Maybe<CustomerAddress>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  deliveryCharges?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  serviceCharge?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['Float']>;
  customerAddressId?: Maybe<Scalars['Float']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id: Scalars['Int'];
  items: Scalars['Int'];
  coupon: Scalars['Int'];
  deliveryCharges: Scalars['Int'];
  vat: Scalars['Int'];
  serviceCharge: Scalars['Int'];
  total: Scalars['Int'];
  isAccepted: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  restaurantId: Scalars['Int'];
  customerId: Scalars['Int'];
  customerAddressId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type OrderCreateInput = {
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutOrdersInput;
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  Customer?: Maybe<CustomerCreateNestedOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressCreateNestedOneWithoutOrderInput>;
};

export type OrderCreateManyCustomerAddressInput = {
  id?: Maybe<Scalars['Int']>;
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  restaurantId: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyCustomerAddressInputEnvelope = {
  data: Array<OrderCreateManyCustomerAddressInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyCustomerInput = {
  id?: Maybe<Scalars['Int']>;
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  restaurantId: Scalars['String'];
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyCustomerInputEnvelope = {
  data: Array<OrderCreateManyCustomerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  restaurantId: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyRestaurantInput = {
  id?: Maybe<Scalars['Int']>;
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyRestaurantInputEnvelope = {
  data: Array<OrderCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  restaurantId: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyUserInputEnvelope = {
  data: Array<OrderCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateNestedManyWithoutCustomerAddressInput = {
  create?: Maybe<Array<OrderCreateWithoutCustomerAddressInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCustomerAddressInput>>;
  createMany?: Maybe<OrderCreateManyCustomerAddressInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutCustomerInput = {
  create?: Maybe<Array<OrderCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  createMany?: Maybe<OrderCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<OrderCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<OrderCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<OrderCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateOrConnectWithoutCustomerAddressInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutCustomerAddressInput;
};

export type OrderCreateOrConnectWithoutCustomerInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutCustomerInput;
};

export type OrderCreateOrConnectWithoutRestaurantInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutRestaurantInput;
};

export type OrderCreateOrConnectWithoutUserInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutUserInput;
};

export type OrderCreateWithoutCustomerAddressInput = {
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutOrdersInput;
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  Customer?: Maybe<CustomerCreateNestedOneWithoutOrdersInput>;
};

export type OrderCreateWithoutCustomerInput = {
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutOrdersInput;
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  CustomerAddress?: Maybe<CustomerAddressCreateNestedOneWithoutOrderInput>;
};

export type OrderCreateWithoutRestaurantInput = {
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutOrdersInput;
  Customer?: Maybe<CustomerCreateNestedOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressCreateNestedOneWithoutOrderInput>;
};

export type OrderCreateWithoutUserInput = {
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  Customer?: Maybe<CustomerCreateNestedOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressCreateNestedOneWithoutOrderInput>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  id: Scalars['Int'];
  items: Scalars['JSON'];
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges: Scalars['Float'];
  vat: Scalars['Float'];
  serviceCharge: Scalars['Float'];
  total: Scalars['Float'];
  isAccepted: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
  restaurantId: Scalars['String'];
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
  count?: Maybe<OrderCountAggregate>;
  avg?: Maybe<OrderAvgAggregate>;
  sum?: Maybe<OrderSumAggregate>;
  min?: Maybe<OrderMinAggregate>;
  max?: Maybe<OrderMaxAggregate>;
};

export type OrderListRelationFilter = {
  every?: Maybe<OrderWhereInput>;
  some?: Maybe<OrderWhereInput>;
  none?: Maybe<OrderWhereInput>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  serviceCharge?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['Int']>;
  coupon?: Maybe<Scalars['String']>;
  deliveryCharges?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  serviceCharge?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderOrderByInput = {
  id?: Maybe<SortOrder>;
  items?: Maybe<SortOrder>;
  coupon?: Maybe<SortOrder>;
  deliveryCharges?: Maybe<SortOrder>;
  vat?: Maybe<SortOrder>;
  serviceCharge?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
  isAccepted?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
  customerId?: Maybe<SortOrder>;
  customerAddressId?: Maybe<SortOrder>;
};

export enum OrderScalarFieldEnum {
  Id = 'id',
  Items = 'items',
  Coupon = 'coupon',
  DeliveryCharges = 'deliveryCharges',
  Vat = 'vat',
  ServiceCharge = 'serviceCharge',
  Total = 'total',
  IsAccepted = 'isAccepted',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  RestaurantId = 'restaurantId',
  CustomerId = 'customerId',
  CustomerAddressId = 'customerAddressId'
}

export type OrderScalarWhereInput = {
  AND?: Maybe<Array<OrderScalarWhereInput>>;
  OR?: Maybe<Array<OrderScalarWhereInput>>;
  NOT?: Maybe<Array<OrderScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  items?: Maybe<JsonFilter>;
  coupon?: Maybe<StringNullableFilter>;
  deliveryCharges?: Maybe<FloatFilter>;
  vat?: Maybe<FloatFilter>;
  serviceCharge?: Maybe<FloatFilter>;
  total?: Maybe<FloatFilter>;
  isAccepted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
  restaurantId?: Maybe<StringFilter>;
  customerId?: Maybe<IntNullableFilter>;
  customerAddressId?: Maybe<IntNullableFilter>;
};

export type OrderScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<OrderScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<OrderScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<OrderScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  items?: Maybe<JsonWithAggregatesFilter>;
  coupon?: Maybe<StringNullableWithAggregatesFilter>;
  deliveryCharges?: Maybe<FloatWithAggregatesFilter>;
  vat?: Maybe<FloatWithAggregatesFilter>;
  serviceCharge?: Maybe<FloatWithAggregatesFilter>;
  total?: Maybe<FloatWithAggregatesFilter>;
  isAccepted?: Maybe<BoolWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
  restaurantId?: Maybe<StringWithAggregatesFilter>;
  customerId?: Maybe<IntNullableWithAggregatesFilter>;
  customerAddressId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  id?: Maybe<Scalars['Int']>;
  deliveryCharges?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  serviceCharge?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  customerAddressId?: Maybe<Scalars['Int']>;
};

export type OrderUpdateInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressUpdateOneWithoutOrderInput>;
};

export type OrderUpdateManyMutationInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutCustomerAddressInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutCustomerInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutUserInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithoutCustomerAddressInput = {
  create?: Maybe<Array<OrderCreateWithoutCustomerAddressInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCustomerAddressInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCustomerAddressInput>>;
  createMany?: Maybe<OrderCreateManyCustomerAddressInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCustomerAddressInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutCustomerAddressInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<OrderCreateWithoutCustomerInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>>;
  createMany?: Maybe<OrderCreateManyCustomerInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutCustomerInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<OrderCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<OrderCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<OrderCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutCustomerAddressInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutCustomerAddressInput;
};

export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutCustomerInput;
};

export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutRestaurantInput;
};

export type OrderUpdateWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutUserInput;
};

export type OrderUpdateWithoutCustomerAddressInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
};

export type OrderUpdateWithoutCustomerInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressUpdateOneWithoutOrderInput>;
};

export type OrderUpdateWithoutRestaurantInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressUpdateOneWithoutOrderInput>;
};

export type OrderUpdateWithoutUserInput = {
  items?: Maybe<Scalars['JSON']>;
  coupon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deliveryCharges?: Maybe<FloatFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<FloatFieldUpdateOperationsInput>;
  total?: Maybe<FloatFieldUpdateOperationsInput>;
  isAccepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>;
  Customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  CustomerAddress?: Maybe<CustomerAddressUpdateOneWithoutOrderInput>;
};

export type OrderUpsertWithWhereUniqueWithoutCustomerAddressInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutCustomerAddressInput;
  create: OrderCreateWithoutCustomerAddressInput;
};

export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutCustomerInput;
  create: OrderCreateWithoutCustomerInput;
};

export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutRestaurantInput;
  create: OrderCreateWithoutRestaurantInput;
};

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutUserInput;
  create: OrderCreateWithoutUserInput;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  id?: Maybe<IntFilter>;
  items?: Maybe<JsonFilter>;
  coupon?: Maybe<StringNullableFilter>;
  deliveryCharges?: Maybe<FloatFilter>;
  vat?: Maybe<FloatFilter>;
  serviceCharge?: Maybe<FloatFilter>;
  total?: Maybe<FloatFilter>;
  isAccepted?: Maybe<BoolFilter>;
  user?: Maybe<UserRelationFilter>;
  restaurant?: Maybe<RestaurantRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
  restaurantId?: Maybe<StringFilter>;
  Customer?: Maybe<CustomerRelationFilter>;
  customerId?: Maybe<IntNullableFilter>;
  CustomerAddress?: Maybe<CustomerAddressRelationFilter>;
  customerAddressId?: Maybe<IntNullableFilter>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel: SpiceLevel;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  ProductCategory?: Maybe<ProductCategory>;
  Restaurant?: Maybe<Restaurant>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurantId: Scalars['String'];
  restaurants: Restaurant;
  Product: Array<Product>;
};


export type ProductCategoryProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  name: Scalars['Int'];
  description: Scalars['Int'];
  image: Scalars['Int'];
  isActive: Scalars['Int'];
  isFeatured: Scalars['Int'];
  restaurantId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ProductCategoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurants: RestaurantCreateNestedOneWithoutProductCategoryInput;
  Product?: Maybe<ProductCreateNestedManyWithoutProductCategoryInput>;
};

export type ProductCategoryCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurantId: Scalars['String'];
};

export type ProductCategoryCreateManyRestaurantsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
};

export type ProductCategoryCreateManyRestaurantsInputEnvelope = {
  data: Array<ProductCategoryCreateManyRestaurantsInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCategoryCreateNestedManyWithoutRestaurantsInput = {
  create?: Maybe<Array<ProductCategoryCreateWithoutRestaurantsInput>>;
  connectOrCreate?: Maybe<Array<ProductCategoryCreateOrConnectWithoutRestaurantsInput>>;
  createMany?: Maybe<ProductCategoryCreateManyRestaurantsInputEnvelope>;
  connect?: Maybe<Array<ProductCategoryWhereUniqueInput>>;
};

export type ProductCategoryCreateNestedOneWithoutProductInput = {
  create?: Maybe<ProductCategoryCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutProductInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
};

export type ProductCategoryCreateOrConnectWithoutProductInput = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateWithoutProductInput;
};

export type ProductCategoryCreateOrConnectWithoutRestaurantsInput = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateWithoutRestaurantsInput;
};

export type ProductCategoryCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurants: RestaurantCreateNestedOneWithoutProductCategoryInput;
};

export type ProductCategoryCreateWithoutRestaurantsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  Product?: Maybe<ProductCreateNestedManyWithoutProductCategoryInput>;
};

export type ProductCategoryGroupBy = {
  __typename?: 'ProductCategoryGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurantId: Scalars['String'];
  count?: Maybe<ProductCategoryCountAggregate>;
  min?: Maybe<ProductCategoryMinAggregate>;
  max?: Maybe<ProductCategoryMaxAggregate>;
};

export type ProductCategoryListRelationFilter = {
  every?: Maybe<ProductCategoryWhereInput>;
  some?: Maybe<ProductCategoryWhereInput>;
  none?: Maybe<ProductCategoryWhereInput>;
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductCategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  isFeatured?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
};

export type ProductCategoryRelationFilter = {
  is?: Maybe<ProductCategoryWhereInput>;
  isNot?: Maybe<ProductCategoryWhereInput>;
};

export enum ProductCategoryScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Name = 'name',
  Description = 'description',
  Image = 'image',
  IsActive = 'isActive',
  IsFeatured = 'isFeatured',
  RestaurantId = 'restaurantId'
}

export type ProductCategoryScalarWhereInput = {
  AND?: Maybe<Array<ProductCategoryScalarWhereInput>>;
  OR?: Maybe<Array<ProductCategoryScalarWhereInput>>;
  NOT?: Maybe<Array<ProductCategoryScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  isActive?: Maybe<BoolNullableFilter>;
  isFeatured?: Maybe<BoolNullableFilter>;
  restaurantId?: Maybe<StringFilter>;
};

export type ProductCategoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  isActive?: Maybe<BoolNullableWithAggregatesFilter>;
  isFeatured?: Maybe<BoolNullableWithAggregatesFilter>;
  restaurantId?: Maybe<StringWithAggregatesFilter>;
};

export type ProductCategoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isFeatured?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  restaurants?: Maybe<RestaurantUpdateOneRequiredWithoutProductCategoryInput>;
  Product?: Maybe<ProductUpdateManyWithoutProductCategoryInput>;
};

export type ProductCategoryUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isFeatured?: Maybe<NullableBoolFieldUpdateOperationsInput>;
};

export type ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput = {
  where: ProductCategoryScalarWhereInput;
  data: ProductCategoryUpdateManyMutationInput;
};

export type ProductCategoryUpdateManyWithoutRestaurantsInput = {
  create?: Maybe<Array<ProductCategoryCreateWithoutRestaurantsInput>>;
  connectOrCreate?: Maybe<Array<ProductCategoryCreateOrConnectWithoutRestaurantsInput>>;
  upsert?: Maybe<Array<ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput>>;
  createMany?: Maybe<ProductCategoryCreateManyRestaurantsInputEnvelope>;
  connect?: Maybe<Array<ProductCategoryWhereUniqueInput>>;
  set?: Maybe<Array<ProductCategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductCategoryWhereUniqueInput>>;
  delete?: Maybe<Array<ProductCategoryWhereUniqueInput>>;
  update?: Maybe<Array<ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput>>;
  updateMany?: Maybe<Array<ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput>>;
  deleteMany?: Maybe<Array<ProductCategoryScalarWhereInput>>;
};

export type ProductCategoryUpdateOneWithoutProductInput = {
  create?: Maybe<ProductCategoryCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutProductInput>;
  upsert?: Maybe<ProductCategoryUpsertWithoutProductInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductCategoryUpdateWithoutProductInput>;
};

export type ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput = {
  where: ProductCategoryWhereUniqueInput;
  data: ProductCategoryUpdateWithoutRestaurantsInput;
};

export type ProductCategoryUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isFeatured?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  restaurants?: Maybe<RestaurantUpdateOneRequiredWithoutProductCategoryInput>;
};

export type ProductCategoryUpdateWithoutRestaurantsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isFeatured?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateManyWithoutProductCategoryInput>;
};

export type ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput = {
  where: ProductCategoryWhereUniqueInput;
  update: ProductCategoryUpdateWithoutRestaurantsInput;
  create: ProductCategoryCreateWithoutRestaurantsInput;
};

export type ProductCategoryUpsertWithoutProductInput = {
  update: ProductCategoryUpdateWithoutProductInput;
  create: ProductCategoryCreateWithoutProductInput;
};

export type ProductCategoryWhereInput = {
  AND?: Maybe<Array<ProductCategoryWhereInput>>;
  OR?: Maybe<Array<ProductCategoryWhereInput>>;
  NOT?: Maybe<Array<ProductCategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  isActive?: Maybe<BoolNullableFilter>;
  isFeatured?: Maybe<BoolNullableFilter>;
  restaurants?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringFilter>;
  Product?: Maybe<ProductListRelationFilter>;
};

export type ProductCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  name: Scalars['Int'];
  description: Scalars['Int'];
  image: Scalars['Int'];
  price: Scalars['Int'];
  spiceLevel: Scalars['Int'];
  isPopular: Scalars['Int'];
  isActive: Scalars['Int'];
  productCategoryId: Scalars['Int'];
  restaurantId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  ProductCategory?: Maybe<ProductCategoryCreateNestedOneWithoutProductInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutProductsInput>;
};

export type ProductCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductCreateManyProductCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductCreateManyProductCategoryInputEnvelope = {
  data: Array<ProductCreateManyProductCategoryInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManyRestaurantInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
};

export type ProductCreateManyRestaurantInputEnvelope = {
  data: Array<ProductCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutProductCategoryInput = {
  create?: Maybe<Array<ProductCreateWithoutProductCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  createMany?: Maybe<ProductCreateManyProductCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<ProductCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<ProductCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateOrConnectWithoutProductCategoryInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutProductCategoryInput;
};

export type ProductCreateOrConnectWithoutRestaurantInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutRestaurantInput;
};

export type ProductCreateWithoutProductCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutProductsInput>;
};

export type ProductCreateWithoutRestaurantInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  ProductCategory?: Maybe<ProductCategoryCreateNestedOneWithoutProductInput>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel: SpiceLevel;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  count?: Maybe<ProductCountAggregate>;
  avg?: Maybe<ProductAvgAggregate>;
  sum?: Maybe<ProductSumAggregate>;
  min?: Maybe<ProductMinAggregate>;
  max?: Maybe<ProductMaxAggregate>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spiceLevel?: Maybe<SpiceLevel>;
  isPopular?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ProductOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  spiceLevel?: Maybe<SortOrder>;
  isPopular?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  productCategoryId?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Name = 'name',
  Description = 'description',
  Image = 'image',
  Price = 'price',
  SpiceLevel = 'spiceLevel',
  IsPopular = 'isPopular',
  IsActive = 'isActive',
  ProductCategoryId = 'productCategoryId',
  RestaurantId = 'restaurantId'
}

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  price?: Maybe<IntNullableFilter>;
  spiceLevel?: Maybe<EnumSpiceLevelFilter>;
  isPopular?: Maybe<BoolNullableFilter>;
  isActive?: Maybe<BoolNullableFilter>;
  productCategoryId?: Maybe<StringNullableFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  price?: Maybe<IntNullableWithAggregatesFilter>;
  spiceLevel?: Maybe<EnumSpiceLevelWithAggregatesFilter>;
  isPopular?: Maybe<BoolNullableWithAggregatesFilter>;
  isActive?: Maybe<BoolNullableWithAggregatesFilter>;
  productCategoryId?: Maybe<StringNullableWithAggregatesFilter>;
  restaurantId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  price?: Maybe<NullableIntFieldUpdateOperationsInput>;
  spiceLevel?: Maybe<EnumSpiceLevelFieldUpdateOperationsInput>;
  isPopular?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  ProductCategory?: Maybe<ProductCategoryUpdateOneWithoutProductInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutProductsInput>;
};

export type ProductUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  price?: Maybe<NullableIntFieldUpdateOperationsInput>;
  spiceLevel?: Maybe<EnumSpiceLevelFieldUpdateOperationsInput>;
  isPopular?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutProductCategoryInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductUpdateManyWithWhereWithoutRestaurantInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductUpdateManyWithoutProductCategoryInput = {
  create?: Maybe<Array<ProductCreateWithoutProductCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutProductCategoryInput>>;
  createMany?: Maybe<ProductCreateManyProductCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutProductCategoryInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutProductCategoryInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<ProductCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<ProductCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpdateWithWhereUniqueWithoutProductCategoryInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutProductCategoryInput;
};

export type ProductUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutRestaurantInput;
};

export type ProductUpdateWithoutProductCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  price?: Maybe<NullableIntFieldUpdateOperationsInput>;
  spiceLevel?: Maybe<EnumSpiceLevelFieldUpdateOperationsInput>;
  isPopular?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutProductsInput>;
};

export type ProductUpdateWithoutRestaurantInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  price?: Maybe<NullableIntFieldUpdateOperationsInput>;
  spiceLevel?: Maybe<EnumSpiceLevelFieldUpdateOperationsInput>;
  isPopular?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  ProductCategory?: Maybe<ProductCategoryUpdateOneWithoutProductInput>;
};

export type ProductUpsertWithWhereUniqueWithoutProductCategoryInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutProductCategoryInput;
  create: ProductCreateWithoutProductCategoryInput;
};

export type ProductUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutRestaurantInput;
  create: ProductCreateWithoutRestaurantInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  price?: Maybe<IntNullableFilter>;
  spiceLevel?: Maybe<EnumSpiceLevelFilter>;
  isPopular?: Maybe<BoolNullableFilter>;
  isActive?: Maybe<BoolNullableFilter>;
  ProductCategory?: Maybe<ProductCategoryRelationFilter>;
  productCategoryId?: Maybe<StringNullableFilter>;
  Restaurant?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  customer?: Maybe<Customer>;
  findFirstCustomer?: Maybe<Customer>;
  customers: Array<Customer>;
  aggregateCustomer: AggregateCustomer;
  groupByCustomer: Array<CustomerGroupBy>;
  customerAddress?: Maybe<CustomerAddress>;
  findFirstCustomerAddress?: Maybe<CustomerAddress>;
  customerAddresses: Array<CustomerAddress>;
  aggregateCustomerAddress: AggregateCustomerAddress;
  groupByCustomerAddress: Array<CustomerAddressGroupBy>;
  customerToken?: Maybe<CustomerToken>;
  findFirstCustomerToken?: Maybe<CustomerToken>;
  customerTokens: Array<CustomerToken>;
  aggregateCustomerToken: AggregateCustomerToken;
  groupByCustomerToken: Array<CustomerTokenGroupBy>;
  deliveryZone?: Maybe<DeliveryZone>;
  findFirstDeliveryZone?: Maybe<DeliveryZone>;
  deliveryZones: Array<DeliveryZone>;
  aggregateDeliveryZone: AggregateDeliveryZone;
  groupByDeliveryZone: Array<DeliveryZoneGroupBy>;
  order?: Maybe<Order>;
  findFirstOrder?: Maybe<Order>;
  orders: Array<Order>;
  aggregateOrder: AggregateOrder;
  groupByOrder: Array<OrderGroupBy>;
  product?: Maybe<Product>;
  findFirstProduct?: Maybe<Product>;
  products: Array<Product>;
  aggregateProduct: AggregateProduct;
  groupByProduct: Array<ProductGroupBy>;
  productCategory?: Maybe<ProductCategory>;
  findFirstProductCategory?: Maybe<ProductCategory>;
  productCategories: Array<ProductCategory>;
  aggregateProductCategory: AggregateProductCategory;
  groupByProductCategory: Array<ProductCategoryGroupBy>;
  restaurant?: Maybe<Restaurant>;
  findFirstRestaurant?: Maybe<Restaurant>;
  restaurants: Array<Restaurant>;
  aggregateRestaurant: AggregateRestaurant;
  groupByRestaurant: Array<RestaurantGroupBy>;
  schedule?: Maybe<Schedule>;
  findFirstSchedule?: Maybe<Schedule>;
  schedules: Array<Schedule>;
  aggregateSchedule: AggregateSchedule;
  groupBySchedule: Array<ScheduleGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
  userToken?: Maybe<UserToken>;
  findFirstUserToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  aggregateUserToken: AggregateUserToken;
  groupByUserToken: Array<UserTokenGroupBy>;
};


export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryFindFirstCustomerArgs = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<Array<CustomerOrderByInput>>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerScalarFieldEnum>>;
};


export type QueryCustomersArgs = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<Array<CustomerOrderByInput>>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerScalarFieldEnum>>;
};


export type QueryAggregateCustomerArgs = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<Array<CustomerOrderByInput>>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCustomerArgs = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<Array<CustomerOrderByInput>>;
  by: Array<CustomerScalarFieldEnum>;
  having?: Maybe<CustomerScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCustomerAddressArgs = {
  where: CustomerAddressWhereUniqueInput;
};


export type QueryFindFirstCustomerAddressArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
  orderBy?: Maybe<Array<CustomerAddressOrderByInput>>;
  cursor?: Maybe<CustomerAddressWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerAddressScalarFieldEnum>>;
};


export type QueryCustomerAddressesArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
  orderBy?: Maybe<Array<CustomerAddressOrderByInput>>;
  cursor?: Maybe<CustomerAddressWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerAddressScalarFieldEnum>>;
};


export type QueryAggregateCustomerAddressArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
  orderBy?: Maybe<Array<CustomerAddressOrderByInput>>;
  cursor?: Maybe<CustomerAddressWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCustomerAddressArgs = {
  where?: Maybe<CustomerAddressWhereInput>;
  orderBy?: Maybe<Array<CustomerAddressOrderByInput>>;
  by: Array<CustomerAddressScalarFieldEnum>;
  having?: Maybe<CustomerAddressScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCustomerTokenArgs = {
  where: CustomerTokenWhereUniqueInput;
};


export type QueryFindFirstCustomerTokenArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
  orderBy?: Maybe<Array<CustomerTokenOrderByInput>>;
  cursor?: Maybe<CustomerTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerTokenScalarFieldEnum>>;
};


export type QueryCustomerTokensArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
  orderBy?: Maybe<Array<CustomerTokenOrderByInput>>;
  cursor?: Maybe<CustomerTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerTokenScalarFieldEnum>>;
};


export type QueryAggregateCustomerTokenArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
  orderBy?: Maybe<Array<CustomerTokenOrderByInput>>;
  cursor?: Maybe<CustomerTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCustomerTokenArgs = {
  where?: Maybe<CustomerTokenWhereInput>;
  orderBy?: Maybe<Array<CustomerTokenOrderByInput>>;
  by: Array<CustomerTokenScalarFieldEnum>;
  having?: Maybe<CustomerTokenScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDeliveryZoneArgs = {
  where: DeliveryZoneWhereUniqueInput;
};


export type QueryFindFirstDeliveryZoneArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
  orderBy?: Maybe<Array<DeliveryZoneOrderByInput>>;
  cursor?: Maybe<DeliveryZoneWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DeliveryZoneScalarFieldEnum>>;
};


export type QueryDeliveryZonesArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
  orderBy?: Maybe<Array<DeliveryZoneOrderByInput>>;
  cursor?: Maybe<DeliveryZoneWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DeliveryZoneScalarFieldEnum>>;
};


export type QueryAggregateDeliveryZoneArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
  orderBy?: Maybe<Array<DeliveryZoneOrderByInput>>;
  cursor?: Maybe<DeliveryZoneWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByDeliveryZoneArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
  orderBy?: Maybe<Array<DeliveryZoneOrderByInput>>;
  by: Array<DeliveryZoneScalarFieldEnum>;
  having?: Maybe<DeliveryZoneScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryFindFirstOrderArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};


export type QueryAggregateOrderArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByOrderArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  by: Array<OrderScalarFieldEnum>;
  having?: Maybe<OrderScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindFirstProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};


export type QueryAggregateProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  by: Array<ProductScalarFieldEnum>;
  having?: Maybe<ProductScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type QueryFindFirstProductCategoryArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  cursor?: Maybe<ProductCategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductCategoryScalarFieldEnum>>;
};


export type QueryProductCategoriesArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  cursor?: Maybe<ProductCategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductCategoryScalarFieldEnum>>;
};


export type QueryAggregateProductCategoryArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  cursor?: Maybe<ProductCategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByProductCategoryArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  by: Array<ProductCategoryScalarFieldEnum>;
  having?: Maybe<ProductCategoryScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};


export type QueryFindFirstRestaurantArgs = {
  where?: Maybe<RestaurantWhereInput>;
  orderBy?: Maybe<Array<RestaurantOrderByInput>>;
  cursor?: Maybe<RestaurantWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RestaurantScalarFieldEnum>>;
};


export type QueryRestaurantsArgs = {
  where?: Maybe<RestaurantWhereInput>;
  orderBy?: Maybe<Array<RestaurantOrderByInput>>;
  cursor?: Maybe<RestaurantWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RestaurantScalarFieldEnum>>;
};


export type QueryAggregateRestaurantArgs = {
  where?: Maybe<RestaurantWhereInput>;
  orderBy?: Maybe<Array<RestaurantOrderByInput>>;
  cursor?: Maybe<RestaurantWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByRestaurantArgs = {
  where?: Maybe<RestaurantWhereInput>;
  orderBy?: Maybe<Array<RestaurantOrderByInput>>;
  by: Array<RestaurantScalarFieldEnum>;
  having?: Maybe<RestaurantScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryScheduleArgs = {
  where: ScheduleWhereUniqueInput;
};


export type QueryFindFirstScheduleArgs = {
  where?: Maybe<ScheduleWhereInput>;
  orderBy?: Maybe<Array<ScheduleOrderByInput>>;
  cursor?: Maybe<ScheduleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ScheduleScalarFieldEnum>>;
};


export type QuerySchedulesArgs = {
  where?: Maybe<ScheduleWhereInput>;
  orderBy?: Maybe<Array<ScheduleOrderByInput>>;
  cursor?: Maybe<ScheduleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ScheduleScalarFieldEnum>>;
};


export type QueryAggregateScheduleArgs = {
  where?: Maybe<ScheduleWhereInput>;
  orderBy?: Maybe<Array<ScheduleOrderByInput>>;
  cursor?: Maybe<ScheduleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByScheduleArgs = {
  where?: Maybe<ScheduleWhereInput>;
  orderBy?: Maybe<Array<ScheduleOrderByInput>>;
  by: Array<ScheduleScalarFieldEnum>;
  having?: Maybe<ScheduleScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};


export type QueryFindFirstUserTokenArgs = {
  where?: Maybe<UserTokenWhereInput>;
  orderBy?: Maybe<Array<UserTokenOrderByInput>>;
  cursor?: Maybe<UserTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserTokenScalarFieldEnum>>;
};


export type QueryUserTokensArgs = {
  where?: Maybe<UserTokenWhereInput>;
  orderBy?: Maybe<Array<UserTokenOrderByInput>>;
  cursor?: Maybe<UserTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserTokenScalarFieldEnum>>;
};


export type QueryAggregateUserTokenArgs = {
  where?: Maybe<UserTokenWhereInput>;
  orderBy?: Maybe<Array<UserTokenOrderByInput>>;
  cursor?: Maybe<UserTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByUserTokenArgs = {
  where?: Maybe<UserTokenWhereInput>;
  orderBy?: Maybe<Array<UserTokenOrderByInput>>;
  by: Array<UserTokenScalarFieldEnum>;
  having?: Maybe<UserTokenScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  schedule: Array<Schedule>;
  deliveryZones: Array<DeliveryZone>;
  customers: Array<Customer>;
  orders: Array<Order>;
  productCategory: Array<ProductCategory>;
  products: Array<Product>;
  users: Array<User>;
};


export type RestaurantScheduleArgs = {
  where?: Maybe<ScheduleWhereInput>;
  orderBy?: Maybe<Array<ScheduleOrderByInput>>;
  cursor?: Maybe<ScheduleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ScheduleScalarFieldEnum>>;
};


export type RestaurantDeliveryZonesArgs = {
  where?: Maybe<DeliveryZoneWhereInput>;
  orderBy?: Maybe<Array<DeliveryZoneOrderByInput>>;
  cursor?: Maybe<DeliveryZoneWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DeliveryZoneScalarFieldEnum>>;
};


export type RestaurantCustomersArgs = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<Array<CustomerOrderByInput>>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CustomerScalarFieldEnum>>;
};


export type RestaurantOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};


export type RestaurantProductCategoryArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  cursor?: Maybe<ProductCategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductCategoryScalarFieldEnum>>;
};


export type RestaurantProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};


export type RestaurantUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type RestaurantCountAggregate = {
  __typename?: 'RestaurantCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  name: Scalars['Int'];
  email: Scalars['Int'];
  businessPhone: Scalars['Int'];
  reservationPhone: Scalars['Int'];
  url: Scalars['Int'];
  address: Scalars['Int'];
  city: Scalars['Int'];
  postCode: Scalars['Int'];
  country: Scalars['Int'];
  currency: Scalars['Int'];
  priceRange: Scalars['Int'];
  diningStyle: Scalars['Int'];
  vat: Scalars['Int'];
  serviceCharge: Scalars['Int'];
  hasParking: Scalars['Int'];
  hasPartyFacilities: Scalars['Int'];
  hasKidsZone: Scalars['Int'];
  isTakeaway: Scalars['Int'];
  isDelivery: Scalars['Int'];
  isReservation: Scalars['Int'];
  isOrdering: Scalars['Int'];
  isAutoAcceptOrder: Scalars['Int'];
  isAutoAcceptReservation: Scalars['Int'];
  updatedAt: Scalars['Int'];
  _all: Scalars['Int'];
};

export type RestaurantCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantCreateNestedOneWithoutCustomersInput = {
  create?: Maybe<RestaurantCreateWithoutCustomersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutCustomersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutDeliveryZonesInput = {
  create?: Maybe<RestaurantCreateWithoutDeliveryZonesInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutDeliveryZonesInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<RestaurantCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutProductCategoryInput = {
  create?: Maybe<RestaurantCreateWithoutProductCategoryInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutProductCategoryInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutProductsInput = {
  create?: Maybe<RestaurantCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutScheduleInput = {
  create?: Maybe<RestaurantCreateWithoutScheduleInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutScheduleInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateNestedOneWithoutUsersInput = {
  create?: Maybe<RestaurantCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutUsersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
};

export type RestaurantCreateOrConnectWithoutCustomersInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutCustomersInput;
};

export type RestaurantCreateOrConnectWithoutDeliveryZonesInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutDeliveryZonesInput;
};

export type RestaurantCreateOrConnectWithoutOrdersInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutOrdersInput;
};

export type RestaurantCreateOrConnectWithoutProductCategoryInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutProductCategoryInput;
};

export type RestaurantCreateOrConnectWithoutProductsInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutProductsInput;
};

export type RestaurantCreateOrConnectWithoutScheduleInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutScheduleInput;
};

export type RestaurantCreateOrConnectWithoutUsersInput = {
  where: RestaurantWhereUniqueInput;
  create: RestaurantCreateWithoutUsersInput;
};

export type RestaurantCreateWithoutCustomersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutDeliveryZonesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutProductCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutScheduleInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
  users?: Maybe<UserCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantCreateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  schedule?: Maybe<ScheduleCreateNestedManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneCreateNestedManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerCreateNestedManyWithoutRestaurantInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryCreateNestedManyWithoutRestaurantsInput>;
  products?: Maybe<ProductCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantGroupBy = {
  __typename?: 'RestaurantGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  email: Scalars['String'];
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  count?: Maybe<RestaurantCountAggregate>;
  min?: Maybe<RestaurantMinAggregate>;
  max?: Maybe<RestaurantMaxAggregate>;
};

export type RestaurantMaxAggregate = {
  __typename?: 'RestaurantMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantMinAggregate = {
  __typename?: 'RestaurantMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  businessPhone?: Maybe<Scalars['String']>;
  reservationPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  priceRange?: Maybe<Scalars['String']>;
  diningStyle?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  serviceCharge?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['Boolean']>;
  hasPartyFacilities?: Maybe<Scalars['Boolean']>;
  hasKidsZone?: Maybe<Scalars['Boolean']>;
  isTakeaway?: Maybe<Scalars['Boolean']>;
  isDelivery?: Maybe<Scalars['Boolean']>;
  isReservation?: Maybe<Scalars['Boolean']>;
  isOrdering?: Maybe<Scalars['Boolean']>;
  isAutoAcceptOrder?: Maybe<Scalars['Boolean']>;
  isAutoAcceptReservation?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  businessPhone?: Maybe<SortOrder>;
  reservationPhone?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  postCode?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  priceRange?: Maybe<SortOrder>;
  diningStyle?: Maybe<SortOrder>;
  vat?: Maybe<SortOrder>;
  serviceCharge?: Maybe<SortOrder>;
  hasParking?: Maybe<SortOrder>;
  hasPartyFacilities?: Maybe<SortOrder>;
  hasKidsZone?: Maybe<SortOrder>;
  isTakeaway?: Maybe<SortOrder>;
  isDelivery?: Maybe<SortOrder>;
  isReservation?: Maybe<SortOrder>;
  isOrdering?: Maybe<SortOrder>;
  isAutoAcceptOrder?: Maybe<SortOrder>;
  isAutoAcceptReservation?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RestaurantRelationFilter = {
  is?: Maybe<RestaurantWhereInput>;
  isNot?: Maybe<RestaurantWhereInput>;
};

export enum RestaurantScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Name = 'name',
  Email = 'email',
  BusinessPhone = 'businessPhone',
  ReservationPhone = 'reservationPhone',
  Url = 'url',
  Address = 'address',
  City = 'city',
  PostCode = 'postCode',
  Country = 'country',
  Currency = 'currency',
  PriceRange = 'priceRange',
  DiningStyle = 'diningStyle',
  Vat = 'vat',
  ServiceCharge = 'serviceCharge',
  HasParking = 'hasParking',
  HasPartyFacilities = 'hasPartyFacilities',
  HasKidsZone = 'hasKidsZone',
  IsTakeaway = 'isTakeaway',
  IsDelivery = 'isDelivery',
  IsReservation = 'isReservation',
  IsOrdering = 'isOrdering',
  IsAutoAcceptOrder = 'isAutoAcceptOrder',
  IsAutoAcceptReservation = 'isAutoAcceptReservation',
  UpdatedAt = 'updatedAt'
}

export type RestaurantScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  businessPhone?: Maybe<StringNullableWithAggregatesFilter>;
  reservationPhone?: Maybe<StringNullableWithAggregatesFilter>;
  url?: Maybe<StringNullableWithAggregatesFilter>;
  address?: Maybe<StringNullableWithAggregatesFilter>;
  city?: Maybe<StringNullableWithAggregatesFilter>;
  postCode?: Maybe<StringNullableWithAggregatesFilter>;
  country?: Maybe<StringNullableWithAggregatesFilter>;
  currency?: Maybe<StringNullableWithAggregatesFilter>;
  priceRange?: Maybe<StringNullableWithAggregatesFilter>;
  diningStyle?: Maybe<StringNullableWithAggregatesFilter>;
  vat?: Maybe<StringNullableWithAggregatesFilter>;
  serviceCharge?: Maybe<StringNullableWithAggregatesFilter>;
  hasParking?: Maybe<BoolNullableWithAggregatesFilter>;
  hasPartyFacilities?: Maybe<BoolNullableWithAggregatesFilter>;
  hasKidsZone?: Maybe<BoolNullableWithAggregatesFilter>;
  isTakeaway?: Maybe<BoolNullableWithAggregatesFilter>;
  isDelivery?: Maybe<BoolNullableWithAggregatesFilter>;
  isReservation?: Maybe<BoolNullableWithAggregatesFilter>;
  isOrdering?: Maybe<BoolNullableWithAggregatesFilter>;
  isAutoAcceptOrder?: Maybe<BoolNullableWithAggregatesFilter>;
  isAutoAcceptReservation?: Maybe<BoolNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type RestaurantUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RestaurantUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<RestaurantCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<RestaurantUpsertWithoutOrdersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  update?: Maybe<RestaurantUpdateWithoutOrdersInput>;
};

export type RestaurantUpdateOneRequiredWithoutProductCategoryInput = {
  create?: Maybe<RestaurantCreateWithoutProductCategoryInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutProductCategoryInput>;
  upsert?: Maybe<RestaurantUpsertWithoutProductCategoryInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  update?: Maybe<RestaurantUpdateWithoutProductCategoryInput>;
};

export type RestaurantUpdateOneWithoutCustomersInput = {
  create?: Maybe<RestaurantCreateWithoutCustomersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutCustomersInput>;
  upsert?: Maybe<RestaurantUpsertWithoutCustomersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RestaurantUpdateWithoutCustomersInput>;
};

export type RestaurantUpdateOneWithoutDeliveryZonesInput = {
  create?: Maybe<RestaurantCreateWithoutDeliveryZonesInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutDeliveryZonesInput>;
  upsert?: Maybe<RestaurantUpsertWithoutDeliveryZonesInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RestaurantUpdateWithoutDeliveryZonesInput>;
};

export type RestaurantUpdateOneWithoutProductsInput = {
  create?: Maybe<RestaurantCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<RestaurantUpsertWithoutProductsInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RestaurantUpdateWithoutProductsInput>;
};

export type RestaurantUpdateOneWithoutScheduleInput = {
  create?: Maybe<RestaurantCreateWithoutScheduleInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutScheduleInput>;
  upsert?: Maybe<RestaurantUpsertWithoutScheduleInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RestaurantUpdateWithoutScheduleInput>;
};

export type RestaurantUpdateOneWithoutUsersInput = {
  create?: Maybe<RestaurantCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<RestaurantCreateOrConnectWithoutUsersInput>;
  upsert?: Maybe<RestaurantUpsertWithoutUsersInput>;
  connect?: Maybe<RestaurantWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RestaurantUpdateWithoutUsersInput>;
};

export type RestaurantUpdateWithoutCustomersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutDeliveryZonesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutOrdersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutProductCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutScheduleInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
  users?: Maybe<UserUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpdateWithoutUsersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  businessPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reservationPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  priceRange?: Maybe<NullableStringFieldUpdateOperationsInput>;
  diningStyle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vat?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serviceCharge?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasParking?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasPartyFacilities?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  hasKidsZone?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isTakeaway?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isDelivery?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isOrdering?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptOrder?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isAutoAcceptReservation?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  schedule?: Maybe<ScheduleUpdateManyWithoutRestaurantInput>;
  deliveryZones?: Maybe<DeliveryZoneUpdateManyWithoutRestaurantInput>;
  customers?: Maybe<CustomerUpdateManyWithoutRestaurantInput>;
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>;
  productCategory?: Maybe<ProductCategoryUpdateManyWithoutRestaurantsInput>;
  products?: Maybe<ProductUpdateManyWithoutRestaurantInput>;
};

export type RestaurantUpsertWithoutCustomersInput = {
  update: RestaurantUpdateWithoutCustomersInput;
  create: RestaurantCreateWithoutCustomersInput;
};

export type RestaurantUpsertWithoutDeliveryZonesInput = {
  update: RestaurantUpdateWithoutDeliveryZonesInput;
  create: RestaurantCreateWithoutDeliveryZonesInput;
};

export type RestaurantUpsertWithoutOrdersInput = {
  update: RestaurantUpdateWithoutOrdersInput;
  create: RestaurantCreateWithoutOrdersInput;
};

export type RestaurantUpsertWithoutProductCategoryInput = {
  update: RestaurantUpdateWithoutProductCategoryInput;
  create: RestaurantCreateWithoutProductCategoryInput;
};

export type RestaurantUpsertWithoutProductsInput = {
  update: RestaurantUpdateWithoutProductsInput;
  create: RestaurantCreateWithoutProductsInput;
};

export type RestaurantUpsertWithoutScheduleInput = {
  update: RestaurantUpdateWithoutScheduleInput;
  create: RestaurantCreateWithoutScheduleInput;
};

export type RestaurantUpsertWithoutUsersInput = {
  update: RestaurantUpdateWithoutUsersInput;
  create: RestaurantCreateWithoutUsersInput;
};

export type RestaurantWhereInput = {
  AND?: Maybe<Array<RestaurantWhereInput>>;
  OR?: Maybe<Array<RestaurantWhereInput>>;
  NOT?: Maybe<Array<RestaurantWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  businessPhone?: Maybe<StringNullableFilter>;
  reservationPhone?: Maybe<StringNullableFilter>;
  url?: Maybe<StringNullableFilter>;
  address?: Maybe<StringNullableFilter>;
  city?: Maybe<StringNullableFilter>;
  postCode?: Maybe<StringNullableFilter>;
  country?: Maybe<StringNullableFilter>;
  currency?: Maybe<StringNullableFilter>;
  priceRange?: Maybe<StringNullableFilter>;
  diningStyle?: Maybe<StringNullableFilter>;
  vat?: Maybe<StringNullableFilter>;
  serviceCharge?: Maybe<StringNullableFilter>;
  hasParking?: Maybe<BoolNullableFilter>;
  hasPartyFacilities?: Maybe<BoolNullableFilter>;
  hasKidsZone?: Maybe<BoolNullableFilter>;
  isTakeaway?: Maybe<BoolNullableFilter>;
  isDelivery?: Maybe<BoolNullableFilter>;
  isReservation?: Maybe<BoolNullableFilter>;
  isOrdering?: Maybe<BoolNullableFilter>;
  isAutoAcceptOrder?: Maybe<BoolNullableFilter>;
  isAutoAcceptReservation?: Maybe<BoolNullableFilter>;
  schedule?: Maybe<ScheduleListRelationFilter>;
  deliveryZones?: Maybe<DeliveryZoneListRelationFilter>;
  customers?: Maybe<CustomerListRelationFilter>;
  orders?: Maybe<OrderListRelationFilter>;
  productCategory?: Maybe<ProductCategoryListRelationFilter>;
  products?: Maybe<ProductListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type RestaurantWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum Role {
  Manager = 'Manager',
  Owner = 'Owner',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin'
}

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  Restaurant?: Maybe<Restaurant>;
};

export type ScheduleAvgAggregate = {
  __typename?: 'ScheduleAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  minDeliveryAmount?: Maybe<Scalars['Float']>;
};

export type ScheduleCountAggregate = {
  __typename?: 'ScheduleCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  openingTime: Scalars['Int'];
  closingTime: Scalars['Int'];
  minDeliveryAmount: Scalars['Int'];
  deliveryTime: Scalars['Int'];
  takeawayTime: Scalars['Int'];
  restaurantId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ScheduleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutScheduleInput>;
};

export type ScheduleCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ScheduleCreateManyRestaurantInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
};

export type ScheduleCreateManyRestaurantInputEnvelope = {
  data: Array<ScheduleCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScheduleCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<ScheduleCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<ScheduleCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<ScheduleCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<ScheduleWhereUniqueInput>>;
};

export type ScheduleCreateOrConnectWithoutRestaurantInput = {
  where: ScheduleWhereUniqueInput;
  create: ScheduleCreateWithoutRestaurantInput;
};

export type ScheduleCreateWithoutRestaurantInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
};

export type ScheduleGroupBy = {
  __typename?: 'ScheduleGroupBy';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  count?: Maybe<ScheduleCountAggregate>;
  avg?: Maybe<ScheduleAvgAggregate>;
  sum?: Maybe<ScheduleSumAggregate>;
  min?: Maybe<ScheduleMinAggregate>;
  max?: Maybe<ScheduleMaxAggregate>;
};

export type ScheduleListRelationFilter = {
  every?: Maybe<ScheduleWhereInput>;
  some?: Maybe<ScheduleWhereInput>;
  none?: Maybe<ScheduleWhereInput>;
};

export type ScheduleMaxAggregate = {
  __typename?: 'ScheduleMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ScheduleMinAggregate = {
  __typename?: 'ScheduleMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  openingTime?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
  deliveryTime?: Maybe<Scalars['String']>;
  takeawayTime?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type ScheduleOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  openingTime?: Maybe<SortOrder>;
  closingTime?: Maybe<SortOrder>;
  minDeliveryAmount?: Maybe<SortOrder>;
  deliveryTime?: Maybe<SortOrder>;
  takeawayTime?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
};

export enum ScheduleScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  OpeningTime = 'openingTime',
  ClosingTime = 'closingTime',
  MinDeliveryAmount = 'minDeliveryAmount',
  DeliveryTime = 'deliveryTime',
  TakeawayTime = 'takeawayTime',
  RestaurantId = 'restaurantId'
}

export type ScheduleScalarWhereInput = {
  AND?: Maybe<Array<ScheduleScalarWhereInput>>;
  OR?: Maybe<Array<ScheduleScalarWhereInput>>;
  NOT?: Maybe<Array<ScheduleScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  openingTime?: Maybe<StringNullableFilter>;
  closingTime?: Maybe<StringNullableFilter>;
  minDeliveryAmount?: Maybe<IntNullableFilter>;
  deliveryTime?: Maybe<StringNullableFilter>;
  takeawayTime?: Maybe<StringNullableFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type ScheduleScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ScheduleScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ScheduleScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ScheduleScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  openingTime?: Maybe<StringNullableWithAggregatesFilter>;
  closingTime?: Maybe<StringNullableWithAggregatesFilter>;
  minDeliveryAmount?: Maybe<IntNullableWithAggregatesFilter>;
  deliveryTime?: Maybe<StringNullableWithAggregatesFilter>;
  takeawayTime?: Maybe<StringNullableWithAggregatesFilter>;
  restaurantId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type ScheduleSumAggregate = {
  __typename?: 'ScheduleSumAggregate';
  id?: Maybe<Scalars['Int']>;
  minDeliveryAmount?: Maybe<Scalars['Int']>;
};

export type ScheduleUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  openingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  closingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  deliveryTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  takeawayTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutScheduleInput>;
};

export type ScheduleUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  openingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  closingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  deliveryTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  takeawayTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScheduleUpdateManyWithWhereWithoutRestaurantInput = {
  where: ScheduleScalarWhereInput;
  data: ScheduleUpdateManyMutationInput;
};

export type ScheduleUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<ScheduleCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<ScheduleCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<ScheduleUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<ScheduleCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<ScheduleWhereUniqueInput>>;
  set?: Maybe<Array<ScheduleWhereUniqueInput>>;
  disconnect?: Maybe<Array<ScheduleWhereUniqueInput>>;
  delete?: Maybe<Array<ScheduleWhereUniqueInput>>;
  update?: Maybe<Array<ScheduleUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<ScheduleUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<ScheduleScalarWhereInput>>;
};

export type ScheduleUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: ScheduleWhereUniqueInput;
  data: ScheduleUpdateWithoutRestaurantInput;
};

export type ScheduleUpdateWithoutRestaurantInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  openingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  closingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minDeliveryAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  deliveryTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  takeawayTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScheduleUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: ScheduleWhereUniqueInput;
  update: ScheduleUpdateWithoutRestaurantInput;
  create: ScheduleCreateWithoutRestaurantInput;
};

export type ScheduleWhereInput = {
  AND?: Maybe<Array<ScheduleWhereInput>>;
  OR?: Maybe<Array<ScheduleWhereInput>>;
  NOT?: Maybe<Array<ScheduleWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  openingTime?: Maybe<StringNullableFilter>;
  closingTime?: Maybe<StringNullableFilter>;
  minDeliveryAmount?: Maybe<IntNullableFilter>;
  deliveryTime?: Maybe<StringNullableFilter>;
  takeawayTime?: Maybe<StringNullableFilter>;
  Restaurant?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type ScheduleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SpiceLevel {
  None = 'None',
  Mild = 'Mild',
  Medium = 'Medium',
  Hot = 'Hot',
  ExtraHot = 'ExtraHot'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Role;
  restaurantId?: Maybe<Scalars['String']>;
  token: Array<UserToken>;
  Restaurant?: Maybe<Restaurant>;
  orders: Array<Order>;
};


export type UserTokenArgs = {
  where?: Maybe<UserTokenWhereInput>;
  orderBy?: Maybe<Array<UserTokenOrderByInput>>;
  cursor?: Maybe<UserTokenWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserTokenScalarFieldEnum>>;
};


export type UserOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<OrderScalarFieldEnum>>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  lastName: Scalars['Int'];
  email: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  role: Scalars['Int'];
  restaurantId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  token?: Maybe<UserTokenCreateNestedManyWithoutUserInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutUsersInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type UserCreateManyRestaurantInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserCreateManyRestaurantInputEnvelope = {
  data: Array<UserCreateManyRestaurantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutRestaurantInput = {
  create?: Maybe<Array<UserCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRestaurantInput>>;
  createMany?: Maybe<UserCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutTokenInput = {
  create?: Maybe<UserCreateWithoutTokenInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTokenInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutOrdersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutOrdersInput;
};

export type UserCreateOrConnectWithoutRestaurantInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutRestaurantInput;
};

export type UserCreateOrConnectWithoutTokenInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutTokenInput;
};

export type UserCreateWithoutOrdersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  token?: Maybe<UserTokenCreateNestedManyWithoutUserInput>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutUsersInput>;
};

export type UserCreateWithoutRestaurantInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  token?: Maybe<UserTokenCreateNestedManyWithoutUserInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTokenInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  Restaurant?: Maybe<RestaurantCreateNestedOneWithoutUsersInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Role;
  restaurantId?: Maybe<Scalars['String']>;
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  restaurantId?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  restaurantId?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Password = 'password',
  Phone = 'phone',
  Role = 'role',
  RestaurantId = 'restaurantId'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  phone?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  phone?: Maybe<StringNullableWithAggregatesFilter>;
  role?: Maybe<EnumRoleWithAggregatesFilter>;
  restaurantId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserToken = {
  __typename?: 'UserToken';
  id: Scalars['Int'];
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
  User?: Maybe<User>;
};

export type UserTokenAvgAggregate = {
  __typename?: 'UserTokenAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserTokenCountAggregate = {
  __typename?: 'UserTokenCountAggregate';
  id: Scalars['Int'];
  token: Scalars['Int'];
  provider: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserTokenCreateInput = {
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateNestedOneWithoutTokenInput>;
};

export type UserTokenCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTokenCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserTokenCreateManyUserInputEnvelope = {
  data: Array<UserTokenCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserTokenCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<UserTokenCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserTokenCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<UserTokenCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserTokenWhereUniqueInput>>;
};

export type UserTokenCreateOrConnectWithoutUserInput = {
  where: UserTokenWhereUniqueInput;
  create: UserTokenCreateWithoutUserInput;
};

export type UserTokenCreateWithoutUserInput = {
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserTokenGroupBy = {
  __typename?: 'UserTokenGroupBy';
  id: Scalars['Int'];
  token: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
  count?: Maybe<UserTokenCountAggregate>;
  avg?: Maybe<UserTokenAvgAggregate>;
  sum?: Maybe<UserTokenSumAggregate>;
  min?: Maybe<UserTokenMinAggregate>;
  max?: Maybe<UserTokenMaxAggregate>;
};

export type UserTokenListRelationFilter = {
  every?: Maybe<UserTokenWhereInput>;
  some?: Maybe<UserTokenWhereInput>;
  none?: Maybe<UserTokenWhereInput>;
};

export type UserTokenMaxAggregate = {
  __typename?: 'UserTokenMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTokenMinAggregate = {
  __typename?: 'UserTokenMinAggregate';
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTokenOrderByInput = {
  id?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum UserTokenScalarFieldEnum {
  Id = 'id',
  Token = 'token',
  Provider = 'provider',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserTokenScalarWhereInput = {
  AND?: Maybe<Array<UserTokenScalarWhereInput>>;
  OR?: Maybe<Array<UserTokenScalarWhereInput>>;
  NOT?: Maybe<Array<UserTokenScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  provider?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type UserTokenScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserTokenScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserTokenScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserTokenScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  provider?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type UserTokenSumAggregate = {
  __typename?: 'UserTokenSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTokenUpdateInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  provider?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  User?: Maybe<UserUpdateOneWithoutTokenInput>;
};

export type UserTokenUpdateManyMutationInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  provider?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserTokenUpdateManyWithWhereWithoutUserInput = {
  where: UserTokenScalarWhereInput;
  data: UserTokenUpdateManyMutationInput;
};

export type UserTokenUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserTokenCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserTokenCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<UserTokenUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<UserTokenCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserTokenWhereUniqueInput>>;
  set?: Maybe<Array<UserTokenWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserTokenWhereUniqueInput>>;
  delete?: Maybe<Array<UserTokenWhereUniqueInput>>;
  update?: Maybe<Array<UserTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserTokenUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserTokenScalarWhereInput>>;
};

export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
  where: UserTokenWhereUniqueInput;
  data: UserTokenUpdateWithoutUserInput;
};

export type UserTokenUpdateWithoutUserInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
  provider?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
  where: UserTokenWhereUniqueInput;
  update: UserTokenUpdateWithoutUserInput;
  create: UserTokenCreateWithoutUserInput;
};

export type UserTokenWhereInput = {
  AND?: Maybe<Array<UserTokenWhereInput>>;
  OR?: Maybe<Array<UserTokenWhereInput>>;
  NOT?: Maybe<Array<UserTokenWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  provider?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  User?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type UserTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  token?: Maybe<UserTokenUpdateManyWithoutUserInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutUsersInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutRestaurantInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<UserCreateWithoutRestaurantInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRestaurantInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRestaurantInput>>;
  createMany?: Maybe<UserCreateManyRestaurantInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutRestaurantInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<UserUpsertWithoutOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOrdersInput>;
};

export type UserUpdateOneWithoutTokenInput = {
  create?: Maybe<UserCreateWithoutTokenInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTokenInput>;
  upsert?: Maybe<UserUpsertWithoutTokenInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutTokenInput>;
};

export type UserUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRestaurantInput;
};

export type UserUpdateWithoutOrdersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  token?: Maybe<UserTokenUpdateManyWithoutUserInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutUsersInput>;
};

export type UserUpdateWithoutRestaurantInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  token?: Maybe<UserTokenUpdateManyWithoutUserInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTokenInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  Restaurant?: Maybe<RestaurantUpdateOneWithoutUsersInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
};

export type UserUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutRestaurantInput;
  create: UserCreateWithoutRestaurantInput;
};

export type UserUpsertWithoutOrdersInput = {
  update: UserUpdateWithoutOrdersInput;
  create: UserCreateWithoutOrdersInput;
};

export type UserUpsertWithoutTokenInput = {
  update: UserUpdateWithoutTokenInput;
  create: UserCreateWithoutTokenInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  phone?: Maybe<StringNullableFilter>;
  token?: Maybe<UserTokenListRelationFilter>;
  role?: Maybe<EnumRoleFilter>;
  Restaurant?: Maybe<RestaurantRelationFilter>;
  restaurantId?: Maybe<StringNullableFilter>;
  orders?: Maybe<OrderListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type Unnamed_1_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Mutation = (
  { __typename?: 'Mutation' }
  & { updateRestaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name'>
  )> }
);


export const Document = `
    mutation {
  updateRestaurant(
    data: {name: {set: "Soi 71"}}
    where: {id: "e5b22e29-fe36-46e8-8417-468d9c9445d9"}
  ) {
    name
  }
}
    `;
export const useMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit }, 
      options?: UseMutationOptions<Mutation, TError, MutationVariables, TContext>
    ) => 
    useMutation<Mutation, TError, MutationVariables, TContext>(
      (variables?: MutationVariables) => fetcher<Mutation, MutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, Document, variables)(),
      options
    );