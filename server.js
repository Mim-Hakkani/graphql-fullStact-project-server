import { ApolloServer } from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from  "apollo-server-core";

import typeDefs from './schema.js'
import resolvers from './resolvers.js'





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