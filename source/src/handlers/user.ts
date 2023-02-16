import { comparePasswords, createToken, hashPassword } from "../modules/auth"
import { prisma } from "../modules/db"
import { Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await prisma.user.create({
    data: {
      username,
      pasword: await hashPassword(password)
    }
  })

  const token = createToken(user)

  res.json({ token })
}

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      username
    }
  })

  const isValid = await comparePasswords(password, user.pasword)

  if (!isValid) {
    res.status(401)
    res.json({ message: "nope" })
  }

  const token = createToken(user)
  res.json({ token })
}
