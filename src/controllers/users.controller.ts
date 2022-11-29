import usersModels from '../models/users.models'

import { Response, Request } from 'express'
import { errorHandler } from '../utils/error.handler'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, userEmail, password } = req.body
    const data = await usersModels.create({ name, userEmail, password })
    res.json({ message: 'User created', data })
  } catch (err) {
    errorHandler(res, 'ERROR_CREATE_USER')
  }
}

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const data = await usersModels.find()
    res.json({ message: 'all users', data })
  } catch (err) {
    errorHandler(res, 'ERROR_GET_ALL_USERS')
  }
}
