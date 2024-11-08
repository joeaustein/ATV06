const express = require("express");
const router = express.Router();
const categoryController = require("./controllers/categoryController");
const productController = require("./controllers/productController");

// Rota de teste para verificar se a API esta funcionando corretamente:
router.get("/", (request, response) => {
  console.log(request.query);
  response.json({ message: "Bem-vindo à API de Lista de Compras (Por Joelinton Dorte)" });
});

// Rotas para Produtos:
// Rota para listar todos os produtos:
router.get("/products", productController.listProducts);
// Rota para criar um novo produto:
router.post("/products", productController.createProduct);
// Rota para atualizar um produto existente:
router.put("/products/:id", productController.updateProduct);
// Rota para excluir um produto:
router.delete("/products/:id", productController.deleteProduct);

// Rotas para Categorias:
// Rota para listar todas as categorias:
router.get("/categories", categoryController.listCategories);
// Rota para criar uma nova categoria:
router.post("/categories", categoryController.createCategory);
// Rota para atualizar uma categoria existente:
router.put("/categories/:id", categoryController.updateCategory);
// Rota para excluir uma categoria:
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
