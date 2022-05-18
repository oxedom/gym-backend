const User = require('../models/userModel')
const graphql = require('graphql');
const {
    session
} = require('passport');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

//Defening a USER TYPE for GraphQL
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        username: {
            type: String
        },
        fname: {
            type: GraphQLString
        },
        lname: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        },
        birthday: {
            type: GraphQLInt
        },
        ///FIX 
        sessions: {
            type: new GraphQLList(SessionType),

            sessionWallet: {
                type: new GraphQLList(CommentType)
            },
            accountCreation: {
                type: GraphQLInt
            }
        }
    })
});

const SessionType = new GraphQLObjectType({
    name: 'Session',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        userid: {
            type: GraphQLObjectType(User)
        },
        trainerid: {
            type: GraphQLObjectType(User)
        },
        planid: {
            type: GraphQLObjectType(Plan)
        },
        status: {
            type: GraphQLString
        },
        date: {
            type: GraphQLInt
        }

    })
})