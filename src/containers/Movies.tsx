import React from 'react'
// import { useMyQuery } from '../generated/graphql';
import { GraphQLClient, gql } from 'graphql-request';
import { getSdk } from '../generated/graphql'

export default function Movies() {

  const clickHandler = async () => {
    console.log('CLICK')
    const client = new GraphQLClient('http://10.143.12.69:4000/graphql');


    // const query = gql`{
    //   User(id:  10) {
    //     id
    //   }
    // }`;


    // const data = await client.request(query);
    const sdk = getSdk(client);

    // const { user } = await sdk; // This is fully typed, based on the query

    // console.log(`GraphQL data:`, data);
  }

  return (
    <div>
      <button onClick={() => clickHandler()}>KNAPP</button>
    </div>
  )
}