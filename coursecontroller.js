const studentModel = require("../Models/studentcController.js");


let createCourse = async (req,res)=> {
try{
    let data=req.body
    let registerCourse = await coursetModel.create(data)
    return registerCourse
    .status(201)
    .send({
        status:true,
        msg:"Course Data registered Successfully",
        data:registerCourse,
    });
} catch (error) {
    return res
    .status(500)
    .send({
        status:false, msg:"Internal Server Error"
    });

}

};

module.exports ={createCourse}