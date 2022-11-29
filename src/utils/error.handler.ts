import { Response } from 'express'

export const errorHandler = (res: Response, error: string) => {
  res.status(500).json({ message: 'Error', error })
}
