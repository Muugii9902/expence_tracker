const sql = require("../config/postgres");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const hashidPassword = bcrypt.hashSync(password, 10);
    const data = await sql`
      INSERT INTO users (email, name, password, profile_img)
      VALUES (${email}, ${name}, ${hashidPassword}, 'url');
    `;
    
    console.log("DATA", data);
    res.status(201).json({ message: "New user created successfully" });
  } catch (error) {
    
    res.status(500).json({ message: "An error occurred while creating the user" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await sql`
      SELECT * FROM users WHERE email=${email}
    `;
    
    if (!user) {
      return res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }

    const isCheck = bcrypt.compareSync(password, user.password);
    
    if (!isCheck) {
      return res.status(400).json({
        message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
      });
    }

    const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "success", token });

  } catch (error) {
    
    res.status(500).json({ message: "Нэвтрэх явцад алдаа гарлаа." });
  }
};


module.exports = { signUp, signIn };
