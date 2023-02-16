import type { NextFunction, Request, Response } from "express"
import { sign, verify } from "jsonwebtoken"
import { compare, genSalt, hash } from "bcrypt"

export const hashPassword = async (password: string, salt?: string | number) => {
  if (!salt) {
    return await hash(password, await genSalt(10))
  }

  return await hash(password, salt)
}

export const comparePasswords = (password: string | Buffer, hashedPassword: string) =>
  compare(password, hashedPassword)

const jwtSecret = process.env.JWT_SECRET || "super-secret"

export const createToken = ({ id, username }) => sign({ id, username }, jwtSecret)

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({ message: "not authorized" })
    return
  }

  const token = bearer.slice(7)

  if (!token) {
    res.status(401)
    res.json({ message: "not valid token" })
    return
  }

  try {
    const user = verify(token, jwtSecret)

    console.log(user)

    // @ts-ignore
    req.user = user

    next()
    return
  } catch (error) {
    console.error(error)
    res.status(401)
    res.json({ message: "not valid token" })
    return
  }

  // res.json({ token })
  return
}
