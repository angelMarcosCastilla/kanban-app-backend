import bcryptjs from 'bcryptjs'

export const encryptPassword = async (password: string) => {
  const hash = await bcryptjs.hash(password, 10)
  return hash
}

export const comparePassword = async (password: string, hash: string) => {
  const isPasswordCorrect = await bcryptjs.compare(password, hash)
  return isPasswordCorrect
}
