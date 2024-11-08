DROP DATABASE IF EXISTS shopping_list;
CREATE DATABASE shopping_list;
USE shopping_list;

-- Tabela de Categorias:
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Inserindo uma categoria padrao:
INSERT INTO categories (name)
VALUES ('Alimentos');

-- Tabela de Produtos:
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Mostra as tabelas criadas:
SHOW TABLES;
DESCRIBE categories;
DESCRIBE products;
