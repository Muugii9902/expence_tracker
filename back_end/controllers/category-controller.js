const sql= require("../config/postgres")

const getAllCategory= async(req,res)=>{
    const data = await sql `SELECT * FROM categories`;
    console.log("Data",data);
    res.status(200).json({message:"success ",categories:data})
};

const creatCategory = async(req,res)=>{
    const {name,description,category_img,createdat,updatedat }= req.body;
    const data= await sql`
    INSERT INTO categories (name,description,category_image,createdat,updatedat)
VALUES(${name},${description},${category_img},${createdat},${updatedat});
`; 
console.log("Data",data)
res.status(201).json({message:"New use created successfully"})

};
const updateCategory= async(req,res)=>{
    const {id}=req.params;
    const {name,description,category_img,createdat,updatedat }= req.body;
    const data =await sql `UPDATE categories
    SET name=${name},description=${description},category_img=${category_img},createdat=${createdat},updatedat=${updatedat} 
     WHERE id=${id}`;
     console.log("DATA",data);
     res.status(200).json({message:"Update successful",category:data[0]})
}


const deleteCategory= async(req, res)=>{
    const { id } = req.params;
    const data = await sql `DELETE FROM categories WHERE id=${id}`;
    console.log("Data",data);
    res.status(200).json({message:"delete success",category:data});
};

module.exports ={getAllCategory,creatCategory, updateCategory,deleteCategory};