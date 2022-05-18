const User = require('../models/userModel')
const Session = require('../models/sessionModel')
const Exercise = require('../models/exerciseModel')

const Plan = require('../models/planModel')
const Muscle = require('../models/MuscleModel')

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

const ExerciseType = new GraphQLObjectType({
    name: 'Exercise',
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
        exercises: {
            type: new GraphQLList(ExerciseType)
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
        post: {
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
        comment: {
            type: CommentType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Comment.findById(args.id)
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({})
            }
        }

        ,
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({})
            }
        }
    },

});