import { Router } from "express"
import {
  body
  // validationResult
} from "express-validator"

import { validateRequest } from "zod-express-middleware"
import { z } from "zod"
// import { handleInputErrors } from "./middleware"
// import { brotliDecompress } from "zlib"
import { createProduct, getAllProducts, getProduct, updateProduct } from "./handlers/product"

const router = Router()

/**
 * Products
 */

// router.get("/products", getAllProducts)
// router.get("/products/:id", getProduct)
// router.put("/products/:id", body("name"), updateProduct)
// router.post("/products", handleInputErrors, createProduct)

// use zod validator

router.post(
  "/products",
  validateRequest({
    body: z.object({
      name: z.string()
    })
  }),
  createProduct
)

router.delete("/products/:id", (req, res) => {})

/**
 * Updates
 */

router.get("/updates", (req, res) => {})
router.get("/updates/:id", (req, res) => {})
router.put(
  "/updates/:id",
  validateRequest({
    body: z.object({
      title: z.string().optional(),
      body: z.string().optional(),
      status: z.enum(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]).optional(),
      version: z.string().optional()
    })
  }),
  (req, res) => {
    const { title, body, status, version } = req.body
  }
)
router.post(
  "/updates",
  validateRequest({
    body: z.object({
      title: z.string(),
      body: z.string(),
      status: z.enum(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]).optional(),
      version: z.string().optional()
    })
  }),
  (req, res) => {}
)
router.delete("/updates/:id", (req, res) => {})

/**
 * Update Points
 */

router.get("/update-points", (req, res) => {})
router.get("/update-points/:id", (req, res) => {})
router.put(
  "/update-points/:id",
  validateRequest({
    body: z.object({
      name: z.string().optional(),
      description: z.string().optional()
    })
  }),
  (req, res) => {}
)

router.post(
  "/update-points",
  validateRequest({
    body: z.object({
      name: z.string(),
      description: z.string(),
      updateId: z.string()
    })
  }),
  (req, res) => {}
)
router.delete("/update-points/:id", (req, res) => {})

export { router }
