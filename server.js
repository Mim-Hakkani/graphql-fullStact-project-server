import { gql,ApolloServer } from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from  "apollo-server-core";

import {users,quotes} from './fakedata.js' 

//create a simple schema 

const typeDefs =gql`

type Query{
    users:[User],
    quotes:[Quote]
}

type User{
    id:ID
    firstname:String
    identity:String
    email:String
    pass:String,
    quotes:[Quote]
}

type Quote{
    name:String
    by:String
}

`

//create a  resolvers for calculations in query ,mutaion ,and subscriptions 

const resolvers = {
    Query:{
        users:()=>users,
        quotes:()=>quotes
    },

    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur.id)
    }
}


//setup the applo server 

const server = new ApolloServer({ 
    typeDefs,
    resolvers ,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});