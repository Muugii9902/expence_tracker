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
 
const getInfo = async (req,res)=>{
  try {
    const [income,expense]= await 
    sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({income,expense});
  } catch (error) {
    res.status(400).json({message:"failed",error})
    
  }
}

const getChartData = async (req,res)=>{
  try {
    const donutChartData= await 
    sql`SELECT SUM(r.amount) ,c.name cat_name FROM records r INNER JOIN 
       categories c ON r.cid=c.id
       WHERE r.transaction_type='EXP'
       GROUP BY cat_name;`;
       const barChartData= await sql`
       
       SELECT TO_CHAR(DATE_TRUNC('month', r.createdat), 'Mon') as sar, 
       SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
       SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_inc
       FROM records r
       GROUP BY DATE_TRUNC('month', r.createdat) 
      ORDER BY DATE_TRUNC('month', r.createdat)`;
    res.status(200).json({donut:donutChartData,bar:barChartData});
  } catch (error) {
    res.status(400).json({message:"failed",error})
    
  }
}
 
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
  getInfo,
  getChartData
  // createRecord,
  // updateRecord,
  // deleteRecord,
};
