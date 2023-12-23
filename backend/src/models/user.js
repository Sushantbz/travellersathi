const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
})

const User = mongoose.model("User", userSchema)

module.exports = User
