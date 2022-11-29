import { User } from '../interfaces/users'
import userModel from '../models/users.models'

export const registerUser = async (user: User) => {
  const { name, userEmail, password } = user
  const data = await userModel.create({ name, userEmail, password })
  return data
}
