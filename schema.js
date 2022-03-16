import { gql } from "apollo-server";

//create a simple schema 

const typeDefs =gql`

type Query{
    users:[User]
    user(_id:ID!):User

    quotes:[Quote]
    quote(by:ID!):[Quote]
}

type User{
    _id:ID!
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


type Mutation{
       signupNewuser(newUser:userInput):User
        
}

input userInput{
        firstname:String!,
        identity:String!,
        email:String!,
        pass:String!
}

`

export default typeDefs;