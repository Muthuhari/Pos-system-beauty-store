import express from "express";
import { CreateProduct,deleteProduct, getProductId, getProducts, updateProduct  } from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", CreateProduct);
productRouter.delete("/:productID", deleteProduct);
productRouter.put("/:productID",updateProduct)
productRouter.get("/:productID", getProductId)

export default productRouter;


//import { createProduct, deleteProduct, getProductId, getProducts, updateProduct } from '../controllers/productController.js';

//const productRouter = express.Router();

//productRouter.get("/",getProducts)
//productRouter.post("/", createProduct)
//productRouter.delete("/:productID", deleteProduct);
//productRouter.put("/:productID",updateProduct)
//productRouter.get("/:productID", getProductId)