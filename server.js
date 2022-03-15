import { gql,ApolloServer } from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from  "apollo-server-core";

import {users,quotes} from './fakedata.js' 

//create a simple schema 

const typeDefs =gql`

type Query{
    users:[User]
    user(id:ID!):User

    quotes:[Quote]
    quote(by:ID!):[Quote]
}

type User{
    id:ID!
    firstname:String
    identity:String
    email:String
    pass:String
    quotes:[Quote]
}

type Quote{
    name:String
    by:String
    users:[User]
}

`

//create a  resolvers for calculations in query ,mutaion ,and subscriptions 

const resolvers = {
    Query:{
        users:()=>users,
        user:(_,{id})=>users.find(singleuser=>singleuser.id==id),
        quotes:()=>quotes,
        quote:(_,{by})=>quotes.filter(quotess=>quotess.by==by)
    },

    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur.id)
    },

    Quote:{
        users:(quoteid)=>users.filter(allusers=>allusers.id==quoteid.by)
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