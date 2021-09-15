import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationCreateManyUserArgs = {
  data?: Maybe<Array<Maybe<UserInput>>>;
};


export type MutationCreateUserArgs = {
  catch_phrase: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  ip_address: Scalars['String'];
  last_name: Scalars['String'];
  list: Scalars['JSON'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  catch_phrase?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip_address?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['JSON']>;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  catch_phrase: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  ip_address: Scalars['String'];
  last_name: Scalars['String'];
  list: Scalars['JSON'];
};

export type UserFilter = {
  catch_phrase?: Maybe<Scalars['String']>;
  catch_phrase_neq?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_neq?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  first_name_neq?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  gender_neq?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ip_address?: Maybe<Scalars['String']>;
  ip_address_neq?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_name_neq?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['JSON']>;
  list_neq?: Maybe<Scalars['JSON']>;
  q?: Maybe<Scalars['String']>;
};

export type UserInput = {
  catch_phrase: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  ip_address: Scalars['String'];
  last_name: Scalars['String'];
  list: Scalars['JSON'];
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;