import {users,quotes} from './fakedata.js' 
import {randomBytes} from 'crypto'
//create a  resolvers for calculations in query ,mutaion ,and subscriptions 

const resolvers = {
    Query:{
        users:()=>users,
        user:(_,{_id})=>users.find(singleuser=>singleuser._id==_id),
        quotes:()=>quotes,
        quote:(_,{by})=>quotes.filter(quotess=>quotess.by==by)
    },

    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur._id)
    },

    Quote:{
        users:(quoteid)=>users.filter(allusers=>allusers._id==quoteid.by)
    },


    Mutation:{
    
        signupNewuser:(_,{newUser})=>{
       
        }
    }
}

export default resolvers ;
