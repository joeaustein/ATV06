const db = require("../models/ConnectDatabase");

// Listar todas as categorias:
const listCategories = async (req, res) => {
  try {
    const categories = await db.query("SELECT * FROM categories");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar categorias." });
  }
};

// Criar uma nova categoria:
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    await db.query("INSERT INTO categories (name) VALUES (?)", [name]);
    res.status(201).json({ message: "Categoria criada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar categoria." });
  }
};

// Atualizar uma categoria existente:
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await db.query("UPDATE categories SET name = ? WHERE id = ?", [name, id]);
    res.json({ message: "Categoria atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar categoria." });
  }
};

// Excluir uma categoria:
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM categories WHERE id = ?", [id]);
    res.json({ message: "Categoria excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir categoria." });
  }
};

// Exportacoes:
module.exports = {
    listCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};