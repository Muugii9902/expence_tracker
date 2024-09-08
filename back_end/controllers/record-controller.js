const sql = require("../config/postgres");

const getAllRecords = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    console.log("DATA", records);
    res.status(200).json({ message: "success", records });
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ message: "Faileasad to fetch records." });
  }
};

// const createRecord = async (req, res) => {
//   const { name, amount, transaction_type, description } = req.body;

//   try {
//     const data = await sql`
//       INSERT INTO records (name, amount, transaction_type, description)
//       VALUES (${name}, ${amount}, ${transaction_type}, ${description})
//       RETURNING *;
//     `;
//     console.log("DATA", data);
//     res.status(201).json({ message: "Created new record successfully", record: data[0] });
//   } catch (error) {
//     console.error("Error creating record:", error);
//     res.status(500).json({ message: "Failed to create record." });
//   }
// };

// const updateRecord = async (req, res) => {
//   const { id } = req.params;
//   const { name, amount, transaction_type, description } = req.body;

//   try {
//     const data = await sql`
//       UPDATE records
//       SET name = ${name}, amount = ${amount}, transaction_type = ${transaction_type}, description = ${description}
//       WHERE id = ${id}
//       RETURNING *;
//     `;
//     console.log("DATA", data);

//     if (data.length === 0) {
//       return res.status(404).json({ message: "Record not found." });
//     }

//     res.status(200).json({ message: "Updated record successfully", record: data[0] });
//   } catch (error) {
//     console.error("Error updating record:", error);
//     res.status(500).json({ message: "Failed to update record." });
//   }
// };

// const deleteRecord = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const data = await sql`DELETE FROM records WHERE id = ${id} RETURNING *;`;
//     console.log("DATA", data);

//     if (data.length === 0) {
//       return res.status(404).json({ message: "Record not found." });
//     }

//     res.status(200).json({ message: "Deleted record successfully", record: data[0] });
//   } catch (error) {
//     console.error("Error deleting record:", error);
//     res.status(500).json({ message: "Failed to delete record." });
//   }
// };


module.exports = {
  getAllRecords,
  // createRecord,
  // updateRecord,
  // deleteRecord,
};
