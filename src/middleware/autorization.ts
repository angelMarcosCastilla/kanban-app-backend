
import { Response, NextFunction } from 'express'
import type { JwtPayload } from 'jsonwebtoken'
import { RequestWithUserInfo } from '../interfaces/expressCustonType'
import { findUserLogin } from '../services/auth'
import { errorHandler } from '../utils/error.handler'
import { verifyToken } from '../utils/jwt'

export const isAutorized = async (req: RequestWithUserInfo, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return errorHandler(res, 'ERROR_AUTHORIZATION')
    }
    const token = req.headers.authorization.split(' ')[1]
    const data = verifyToken(token)
    if (!data) {
      return errorHandler(res, 'INVALID_TOKEN')
    }
    const userInfo = await findUserLogin((data as JwtPayload).userEmail)
    req.userInfo = userInfo
    next()
  } catch (error) {
    return errorHandler(res, 'SERVER_ERROR')
  }
}
