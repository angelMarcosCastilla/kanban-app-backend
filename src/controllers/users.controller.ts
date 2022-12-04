import usersModels from '../models/users.models'

import { Response, Request } from 'express'
import { errorHandler } from '../utils/error.handler'
import { registerUser } from '../services/user'

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = await registerUser(req.body)
    if (data.hasUser) {
      console.log('existe el usuario')
      return res.json({ message: 'This user already exists', error: true })
    }
    res.json({ message: 'User created', data: data.data })
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
