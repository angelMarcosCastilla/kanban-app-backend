import { userToken } from '../interfaces/users'
import jwt from 'jsonwebtoken'

export const createToken = (user: userToken) => {
  try {
    const secret = process.env.JWT_SECRET as string
    const token = jwt.sign(user, secret, { expiresIn: '5h' })
    return token
  } catch (err) {
    console.log(err)
  }
}

export const verifyToken = (token: string) => {
  try {
    const secret = process.env.JWT_SECRET as string
    const data = jwt.verify(token, secret)
    return data
  } catch (error) {
    console.log(error)
  }
}
