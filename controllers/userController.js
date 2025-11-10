const userModel = require('../models/userModel')

const resolvers = {
    Query: {
       getAllUsers:() => userModel.getAllUsers(),
        getUserByID: (_, {id}) => userModel.getUserByID(id),
    },
    Mutation:{
        createUser:(_,{name,email,age}) => userModel.create(name,email,age),
    }

}

module.exports = resolvers;