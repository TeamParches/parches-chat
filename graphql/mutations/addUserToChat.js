/**
 * @file Contains addUserToChat mutation.
 * @author Manuel Cabral
 * @version 0.0.1
 */

// required modules
const { GraphQLNonNull, GraphQLID, findDangerousChanges } = require('graphql')
const { ChatType } = require('../types')
const findUserById = require('../../controllers/userController').findById
const findChatById = require('../../controllers/chatController').findById

// arguments object
const args = {
	chatId: {
		type: new GraphQLNonNull(GraphQLID),
		description: 'The id of the chat.',
	},
	userId: {
		type: GraphQLID,
		description:
			'The id of the user, if not provided, the current user will be used.',
	},
}

/**
 * Add a user to a chat.
 * @param {Object} _ - The parent object. Not used.
 * @param {Object} args - The arguments passed to the query.
 * @param {Object} context - The context object.
 * @returns {Object} The chat object.
 */
const resolve = async (_, args, context) => {
	const chat = await findChatById(args.chatId)
	if (!chat) throw new Error('Chat no encontrado.')
	const user = await findUserById(args.userId)
	if (!user) throw new Error('User not found.')

	// check if the user is already in the chat
	const userInChat = chat.users.find((u) => u.id === user.id)
	if (userInChat) throw new Error('El usuario ya está en el chat.')

	chat.users.push(user)
	await chat.save()
	return chat
}

// mutation object
const addUserToChat = {
	type: ChatType,
	description: 'Add a user to a chat.',
	args,
	resolve,
}

module.exports = addUserToChat
