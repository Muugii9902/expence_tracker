const sql = require("../config/postgres");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categories`;
    console.log("Data", data);
    res.status(200).json({ message: "Амжилттай", categories: data });
  } catch (error) {
    res.status(500).json({ message: "Категориудыг авахад алдаа гарлаа." });
  }
};

const creatCategory = async (req, res) => {
  const { name, description, category_image } = req.body;

  try {
    const data = await sql`
      INSERT INTO categories (name, description, category_image)
      VALUES (${name}, ${description}, ${category_image});
    `;
    console.log("Data", data);
    res.status(201).json({ message: "Шинэ категори амжилттай үүслээ" });
  } catch (error) {
    res.status(500).json({ message: "Категори үүсгэхэд алдаа гарлаа." });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_image } = req.body;

  try {
    const data = await sql`
      UPDATE categories
      SET name = ${name}, description = ${description}, category_image = ${category_image}
      WHERE id = ${id}
      RETURNING *;
    `;
    console.log("DATA", data);
    if (data.length === 0) {
      return res.status(404).json({ message: "Категори олдсонгүй." });
    }
    res.status(200).json({ message: "Амжилттай шинэчилэгдлээ", category: data[0] });
  } catch (error) {
    res.status(500).json({ message: "Категори шинэчлэхэд алдаа гарлаа." });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sql`DELETE FROM categories WHERE id = ${id} RETURNING *;`;
    console.log("DATA", data);
    
    if (data.length === 0) {
      return res.status(404).json({ message: "Категори олдсонгүй." });
    }

    res.status(200).json({ message: "Категори амжилттай устгагдлаа", category: data[0] });
  } catch (error) {
    res.status(500).json({ message: "Категори устгахад алдаа гарлаа." });
  }
};



module.exports = {
  getAllCategory,
  creatCategory,
  updateCategory,
  deleteCategory,
};
