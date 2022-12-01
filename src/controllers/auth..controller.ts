import { Request, Response } from 'express'
import { findUserLogin } from '../services/auth'
import { comparePassword } from '../utils/encript'
import { errorHandler } from '../utils/error.handler'
import { createToken } from '../utils/jwt'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await findUserLogin(email)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const passwordHash = user.password
    const isPasswordCorrect = await comparePassword(password, passwordHash)

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalidate password' })
    }

    const { name, userEmail, _id } = user
    const token = createToken({ name, userEmail })
    const data = { name, userEmail, token, _id }
    res.status(200)
    res.json({ message: 'login success', data })
  } catch (error) {
    errorHandler(res, 'ERROR_LOGIN')
  }
}