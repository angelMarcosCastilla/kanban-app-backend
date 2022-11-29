/* eslint-disable @typescript-eslint/restrict-template-expressions */

import mongoose from 'mongoose'

export const connect = (): void => {
  mongoose.connect(`${process.env.DB_URI}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
}
