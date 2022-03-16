import { ApolloServer } from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from  "apollo-server-core";

import typeDefs from './schema.js'

import mongoose from "mongoose";
import { mongo_uri } from "./config.js";


//connect with mongoose 
mongoose.connect(mongo_uri),{
  useNewUrlParse:true,
  useUnifieldTopology:true
}

mongoose.connection.on("connected",()=>{
  console.log("mongodb is successfully connected")
})

mongoose.connection.on("erroe",(err)=>{
  console.log("error conntecting",err);
})


//models is here 

import './models/users.js'
import './models/quotes.js'

import resolvers from './resolvers.js'
import { users } from "./fakedata.js";

//setup the applo server 

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


