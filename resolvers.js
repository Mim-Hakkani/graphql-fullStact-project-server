import {users,quotes} from './fakedata.js' 
import {randomBytes} from 'crypto'
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
    },


    Mutation:{
    
        createNewuser:(_,{firstname,identity,email,pass})=>{
            const id =randomBytes(5).toString("hex")
            users.push({
                id,
                firstname,
                identity,
                email,
                pass
            })

            return (users.find(user=>user.id==id))
        }
    }
}

export default resolvers ;
