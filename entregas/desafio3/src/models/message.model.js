import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
	user: String,
	message: String,
	status: {
		type: Boolean,
		default: true
	},
	createdAt: Date,
  updatedAt: Date
})

const Message = mongoose.model('messages', messageSchema)

export default Message