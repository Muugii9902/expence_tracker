const sql = require("../config/postgres");

const getCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    const [data] = await sql`SELECT * FROM users WHERE id=${id}`;
    res.status(200).json({ message: "Амжилттай", user: data });
  } catch (error) {
    res.status(500).json({ message: "Хэрэглэгчийн мэдээллийг авахад алдаа гарлаа" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log("DATA", data);
    res.status(200).json({ message: "Амжилттай", user: data });
  } catch (error) {
    res.status(500).json({ message: "Хэрэглэгчдийн мэдээллийг авахад алдаа гарлаа" });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const data = await sql`
      INSERT INTO users (email, name, password, profile_img)
      VALUES(${email}, ${name}, ${password},${profile_img});
    `;
    console.log("DATA", data);
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (error) {
    res.status(500).json({ message: "Хэрэглэгч үүсгэхэд алдаа гарлаа" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, password, profile_img } = req.body;
    const data = await sql`UPDATE users
      SET email=${email},name=${name},password=${password},profile_img=${profile_img}
      WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "Амжилттай шинэчилэгдлээ", user: data[0] });
  } catch (error) {
    res.status(500).json({ message: "Хэрэглэгчийн мэдээллийг шинэчлэхэд алдаа гарлаа" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", req.params);
    const data = await sql`DELETE FROM users WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "Хэрэглэгч амжилттай устгагдлаа", user: data });
  } catch (error) {
    res.status(500).json({ message: "Хэрэглэгч устгахад алдаа гарлаа" });
  }
};


module.exports = { getAllUser, createUser, updateUser, deleteUser ,getCurrentUser};
