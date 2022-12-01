import { User } from '../interfaces/users'
import userModel from '../models/users.models'
import { encryptPassword } from '../utils/encript'

export const registerUser = async (user: User) => {
  const { name, userEmail, password } = user
  const passwordEncrypted = await encryptPassword(password)
  const data = await userModel.create({ name, userEmail, password: passwordEncrypted })
  return data
}
