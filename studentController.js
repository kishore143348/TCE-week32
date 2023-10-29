const Student = require("../Models/studentModel")



const createStd = async (req,res)=>{
    try {
        let data = req.body
        let register = await Student.create(data)
        return res.status(201).send({status:true, msg:"Data Created", data:register})
    } catch (error) {
        return res.status(500).send({status:false, msg:"Internal Server error"})
    }
   
}

module.exports = {createStd}