
import mongoose from 'mongoose'

export const connect = (): void => {
  const dburi = process.env.DB_URI as string
  mongoose.connect(dburi)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
}
