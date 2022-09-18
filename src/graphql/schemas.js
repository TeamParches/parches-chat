/**
 * @file Contains all GraphQL schemas.
 * @author Manuel Cabral
 * @version 0.1.0
 */

// required modules
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

// required queries
const {
	hello,
	users,
	user,
	chat,
	chats,
	verify,
	messages,
	sendEmailVerification,
} = require('./queries')

// required mutations
const {
	register,
	login,
	createMessage,
	deleteMessage,
	createChat,
	deleteChat,
	updateUser,
	updateMessage,
	addUserToChat,
	removeUserFromChat,
	refreshToken,
} = require('./mutations')

// required subscriptions
const { messageAdded } = require('./subscriptions')

// query graphql object
const QueryType = new GraphQLObjectType({
	name: 'QueryType',
	description:
		'Parches Chat Root query type, contains all queries provided by the API.',
	fields: {
		hello,
		users,
		user,
		messages,
		chat,
		chats,
		verify,
		sendEmailVerification,
	},
})

// mutation graphql object
const MutationType = new GraphQLObjectType({
	name: 'MutationType',
	description:
		'Parches Chat Root mutation type, contains all mutations provided by the API.',
	fields: {
		register,
		login,
		createChat,
		createMessage,
		updateUser,
		updateMessage,
		addUserToChat,
		removeUserFromChat,
		refreshToken,
		deleteChat,
		deleteMessage,
	},
})

// subscription graphql object
const SubscriptionType = new GraphQLObjectType({
	name: 'SubscriptionType',
	description:
		'Parches Chat Root subscription type, contains all subscriptions provided by the API.',
	fields: {
		messageAdded,
	},
})

module.exports = new GraphQLSchema({
	query: QueryType,
	mutation: MutationType,
	subscription: SubscriptionType,
})