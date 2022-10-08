/**
 * @file Contains the user model.
 * @author Manuel Cabral
 * @version 0.0.7
 */

// required modules
const { Schema, model } = require('mongoose')

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		avatar: {
			type: String,
			default: 'https://i.imgur.com/0y0Z0X1.png',
		},
		verified: {
			type: Boolean,
			default: false,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [
				/^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
				'Please a valid email address',
			],
		},
		status: {
			type: Number,
			default: 0,
			enum: [0, 1, 2, 3], // 0: active, 1: idle, 2: not disturb, 3: offline
		},
		friends: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				status: {
					type: Number,
					default: 0,
					enum: [0, 1, 2, 3], // 0: added, 1: requested, 2: pending, 3: friend
				},
			},
		],
		blockedUsers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = model('User', userSchema)