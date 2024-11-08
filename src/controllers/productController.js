const db = require("../models/ConnectDatabase");

// Listar todos os produtos:
const listProducts = async (req, res) => {
  try {
    const products = await db.query("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos." });
  }
};

// Criar um novo produto:
const createProduct = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    await db.query("INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)", [name, price, category_id]);
    res.status(201).json({ message: "Produto criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto." });
  }
};

// Atualizar um produto existente:
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category_id } = req.body;
  try {
    await db.query("UPDATE products SET name = ?, price = ?, category_id = ? WHERE id = ?", [name, price, category_id, id]);
    res.json({ message: "Produto atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto." });
  }
};

// Excluir um produto:
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
    res.json({ message: "Produto excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir produto." });
  }
};

// Exportacoes:
module.exports = {
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};