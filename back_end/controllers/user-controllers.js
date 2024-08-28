const sql = require("../config/postgres");

const getAllUser= async(req,res)=>{
    const data= await sql`SELECT * FROM employees`;
    console.log("DATA",data)
    res.status(200).json({message:"bolson",user:data})
};
const creatUser =()=>{};
const updateUser=()=>{}
const deleteUser=async(req,res)=>{
    const id = req.params
    const data= await sql`DELETE  FROM employees WHERE eid=${id}`;
    console.log("DATA",data)
    res.status(200).json({message:"delete",user:data})
}

module.exports ={getAllUser,creatUser,updateUser,deleteUser};