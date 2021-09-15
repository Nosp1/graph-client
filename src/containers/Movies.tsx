import React from 'react'
// import { useMyQuery } from '../generated/graphql';
import { GraphQLClient, gql } from 'graphql-request';
import { getSdk } from '../generated/graphql'
import {log} from 'util';

export default function Movies() {

  const clickHandler = async () => {
    console.log('CLICK')
    const client = new GraphQLClient('http://localhost:4000/graphql');


    // const query = gql`{
    //   User(id:  10) {
    //     id
    //   }
    // }`;


    // const data = await client.request(query);
    const sdk = getSdk(client);
    await sdk.getAllUsers().then(results => {
        console.log(results)}).catch(err => {
	console.log(err)})

    // const { user } = await sdk; // This is fully typed, based on the query

    // console.log(`GraphQL data:`, data);
  }

  return (
    <div>
      <button onClick={() => clickHandler()}>KNAPP</button>
    </div>
  )
}