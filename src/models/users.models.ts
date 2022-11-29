import { Schema, model } from 'mongoose'
import { User } from '../interfaces/users'

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false
  }
)

const userModel = model('user', userSchema)
export default userModel
