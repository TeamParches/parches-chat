/**
 * @file Contains login mutation.
 * @author Manuel Cabral
 * @version 0.0.8
 */

// required modules
const { findOne } = require('../../controllers/userController')
const { createToken } = require('../../utils/auth')
const { GraphQLNonNull, GraphQLString } = require('graphql')

// arguments object
const args = {
	email: {
		type: new GraphQLNonNull(GraphQLString),
		description: 'The email of the user.',
	},
	password: {
		type: new GraphQLNonNull(GraphQLString),
		description: 'The password of the user (not hashed).',
	},
}

/**
 * Resolve a user login.
 * @param {Object} _ - Parent object, not used in this case.
 * @param {Object} args - Arguments passed to the mutation.
 * @returns {String} - A token.
 */
const resolve = async (_, args) => {
	const user = await findOne(args, false)
	if (!user || args.password !== user.password)
		throw new Error('Creedenciales incorrectas.')
	if (!user.verified)
		throw new Error('Usuario no verificado, por favor verifica tu cuenta.')
	return createToken({
		id: user._id,
		username: user.username,
		email: user.email,
	})
}

// mutation object
const login = {
	type: GraphQLString,
	description: 'Login a user and returns a access token.',
	args,
	resolve,
}

module.exports = login