const express = require("express");
const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Products.js");
const { verifyUser } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get("/products", verifyUser, getProducts);
router.get("/products/:id", verifyUser, getProductsById);
router.post("/products", verifyUser, createProduct);
router.put("/products/:id", verifyUser, updateProduct);
router.delete("/products/:id", verifyUser, deleteProduct);

module.exports = router;
