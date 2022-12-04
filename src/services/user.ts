import { User } from '../interfaces/users'
import userModel from '../models/users.models'
import { encryptPassword } from '../utils/encript'

export const registerUser = async (user: User) => {
  const { name, userEmail, password } = user
  const isUser = await getUser({ userEmail })
  if (isUser) {
    return { message: 'User already exists', hasUser: true }
  }
  const passwordEncrypted = await encryptPassword(password)
  const data = await userModel.create({
    name,
    userEmail,
    password: passwordEncrypted
  })
  // para que no devuelva la contraseña
  data.set('password', undefined, { strict: false })
  return { data, hasUser: false }
}

export const getUser = async (filter: any) => {
  const data = await userModel.findOne(filter)
  return data
}
