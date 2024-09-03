const sql = require("../config/postgres");

const getCurrentUser =async (req,res)=>{
  const{id}=req.user;
  const [data]=await sql`SELECT * FROM users WHERE id=${id} `;
  res.status(200).json({message:"success",user:data})
}

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "bolson", user: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const data = await sql`
    INSERT INTO users (email, name, password, profile_img)
    VALUES(${email}, ${name}, ${password},${profile_img});
    `;
  console.log("DATA", data);
  res.status(201).json({ message: "New use created successfully" });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, password, profile_img } = req.body;
  const data = await sql`UPDATE users
    SET email=${email},name=${name},password=${password},profile_img=${profile_img}
    WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Update successful", user: data[0] });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("id", req.params);
  const data = await sql`DELETE FROM users WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete", user: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser ,getCurrentUser};
