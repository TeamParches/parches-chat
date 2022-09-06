/**
 * @file Contains user model functions.
 * @author Manuel Cabral
 * @version 0.0.6
 */

// required modules
const { User } = require('../models')
const { ObjectId } = require('mongoose').Types

/**
 * Create a new user in the database.
 * @param {Object} args - The required user data.
 * @param {Boolean} save - If true, the user will be saved in the database.
 * @returns {Object} The new instanced user.
 */
const createUser = async (data, save = true) => {
	const newUser = new User(data)
	if (save) await newUser.save()
	return newUser
}

/**
 * Find a user by its id.
 * @param {Object} data - Data to find the user, usually an email or id.
 * @param {Boolean} secure - If true, the password will be excluded from the result.
 * @returns {Object} The user found.
 */
const findOne = async (data, secure = true) =>
	await User.findOne(data).select(secure ? '' : '+password')

/**
 * Find a user by its id.
 * @param {String} id - The id of the user to find.
 * @returns {Object} The user found, or null if not found.
 */
const findById = async (id) => {
	if (!ObjectId.isValid(id)) return null
	return await User.findById(id)
}

/**
 * Find all users.
 * @returns {Array} The users found.
 */
const findAll = async () => await User.find()

/**
 * Find many users by their ids.
 * @param {Array} ids - The ids of the users to find.
 * @returns {Array} The users found, or null if not found an id.
 */
const findMany = async (ids) => {
	for (const id of ids) if (!ObjectId.isValid(id)) return null
	const mapIds = ids.map((id) => ObjectId(id))
	return await User.find({ _id: { $in: mapIds } })
}

/**
 * Update a user by its id.
 * @param {String} id - The id of the user to update.
 * @param {Object} data - The data to update.
 * @returns
 */
const updateOneUser = async (id, data) => {
	if (!ObjectId.isValid(id)) return null
	return await User.findByIdAndUpdate(id, data, { new: true })
}

module.exports = {
	createUser,
	findById,
	findOne,
	findAll,
	findMany,
	updateOneUser,
}
