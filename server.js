import { gql,ApolloServer } from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from  "apollo-server-core"

//create a simple schema 

const typeDefs =gql`
type Query{
    greet : String
}

`

//create a  resolvers for calculations in query ,mutaion ,and subscriptions 

const resolvers = {
    Query:{
        greet:()=>"hellow world"
    }
}