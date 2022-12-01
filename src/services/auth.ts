import userModel from '../models/users.models'

export const findUserLogin = async (email: string) => {
  const user = await userModel.findOne({ userEmail: email })
  return user
}
