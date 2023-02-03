import { Request, Response } from 'express'
import { RequestWithUserInfo } from '../interfaces/expressCustonType'
import { findUserLogin } from '../services/auth'
import { comparePassword } from '../utils/encript'
import { errorHandler } from '../utils/error.handler'
import { createToken } from '../utils/jwt'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await findUserLogin(email)

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User not found', field: 'email', isLogged: false })
    }

    const passwordHash = user.password
    const isPasswordCorrect = await comparePassword(password, passwordHash)

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: 'Invalidate password',
        field: 'password',
        isLogged: false
      })
    }

    const { name, userEmail, _id } = user
    const token = createToken({ name, userEmail })
    const data = { name, userEmail, token, _id }

    res.status(200)
    res.json({ message: 'login success', data, isLogged: true })
  } catch (error) {
    errorHandler(res, 'ERROR_LOGIN')
  }
}

export const logout = async (_req: RequestWithUserInfo, res: Response) => {
  try {
    res.json({ message: 'logout success', isLogged: false })
  } catch (error) {
    errorHandler(res, 'ERROR_LOGOUT')
  }
}
