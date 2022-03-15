import { gql } from "apollo-server";

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

export default typeDefs;