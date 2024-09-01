const sql = require("../config/postgres");

const getAllRecords = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};

const createRecord = async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;
  const data =
    await sql`INSERT INTO records (name ,amount, transaction_type,description )VALUES(${name},${amount},${transaction_type},${description});`;
  console.log("DATA", data);
  res
    .status(201)
    .json({ message: "Created new record successfully", user: data });
};

const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { name, amount, transaction_type, description } = req.body;
  const data =
    await sql`UPDATE records SET name=${name},amount=${amount},transaction_type=${transaction_type},description=${description} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Updated record successfully", user: data });
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Deleted record successfully", user: data });
};

module.exports = {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
};