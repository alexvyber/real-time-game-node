import { Request, Response } from "express"
//
import { prisma } from "../modules/db"

interface CustomRequest extends Request {
  // user: { id: any }
}

// get all products
const getAllProducts = async (req: CustomRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true
    }
  })

  res.json({ data: user.products })
}

// get one product
const getProduct = async (req: CustomRequest, res: Response) => {
  // const id = req.params.id

  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id
    }
  })

  res.json({ data: product })
}

const createProduct = async (req: CustomRequest, res: Response) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id
    }
  })

  res.json({ data: product })
}

const updateProduct = async (req: CustomRequest, res: Response) => {
  const updated = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id
      }
    },
    data: {
      name: req.body.name
    }
  })

  res.json({ data: updated })
}

const deleteProduct = async (req: CustomRequest, res: Response) => {
  const deleted = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id
      }
    }
  })

  res.json({ data: deleted })
}

export { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct }
