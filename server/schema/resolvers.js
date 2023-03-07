const { AuthenticationError } = require('apollo-server-express')
const {User, Book} = require ('../models')
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parents, args, context) =>{
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                return userData
            }
        }
    },

    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return {token, user}
        },
        login: async(parent, {email, password}) =>{
            const user = await User.findOne({email})
            if(!user){
                throw new AuthenticationError('Email or Password is Incorrect! Please Try Again')
            }

            const token = signToken(user)
            return {token, user}
        },
        saveBook: async(parent, {input}, context) =>{
            if(context.user){
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    {$addToSet: {saveBook: input}},
                    {new: true}
                )
                return updateUser
            }
        }
    }
}

module.exports = resolvers