/* eslint-disable @typescript-eslint/explicit-function-return-type */
import usersModels from '../models/users.models'

import { Response, Request } from 'express'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, userEmail, password } = req.body
    const data = await usersModels.create({ name, userEmail, password })
    res.json({ message: 'User created', data })
  } catch (err) {
    res.json({ message: 'Error', err })
  }
}

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const data = await usersModels.find()
    res.json({ message: 'all users', data })
  } catch (err) {
    res.json({ message: 'Error', err })
  }
}
