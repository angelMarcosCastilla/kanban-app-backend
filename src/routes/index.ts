/* eslint-disable @typescript-eslint/no-floating-promises */
import express from 'express'
import fs from 'fs'
const Router = express.Router()
const pathRoutes = __dirname

const removeExtension = (fileName: string): string => {
  return fileName.split('.').shift() as string
}

fs.readdirSync(pathRoutes).forEach((file) => {
  const fileWithRemovedExtension = removeExtension(file)
  if (fileWithRemovedExtension !== 'index') {
    import(`./${fileWithRemovedExtension}`).then((module) => {
      Router.use(`/${fileWithRemovedExtension}`, module.Router)
    })
  }
})

export { Router }
