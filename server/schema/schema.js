const User = require('../models/userModel')
const Session = require('../models/sessionModel')
const Equipment = require('../models/equipmentModel')

const Plan = require('../models/planModel')
const Muscle = require('../models/muscleModel')

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
                type: GraphQLList
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
            type: GraphQLObjectType(UserType)
        },
        trainerid: {
            type: GraphQLObjectType(UserType)
        },
        planid: {
            type: GraphQLObjectType(PlanType)
        },
        status: {
            type: GraphQLString
        },
        date: {
            type: GraphQLInt
        }

    })
})

const equipmentType = new GraphQLObjectType({
    name: 'Equipment',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        weight_min: {
            type: GraphQLInt
        },
        weight_max: {
            type: GraphQLInt
        },
        muscles: {
            type: new GraphQLList(MuscleType)
        }

    })
})

const PlanType = new GraphQLObjectType({
    name: 'Plan',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        userid: {
            type: GraphQLObjectType(UserType)
        },
        startdate: {
            type: GraphQLString
        },
        enddate: {
            type: GraphQLString
        },
        equipments: {
            type: new GraphQLList(equipmentType)
        },
        records: {
            type: GraphQLList
        },
        active: {
            type: GraphQLBoolean
        },

        date: {
            type: GraphQLInt
        }

    })
})

const MuscleType = new GraphQLObjectType({
    name: 'Muscle',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        category: {
            type: GraphQLString
        },
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //Single items
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                // code to get data from db / other source
                return User.findById(args.id)
            }
        },
    },

});