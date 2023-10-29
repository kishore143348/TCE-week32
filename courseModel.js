const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    Maths:{
        type: String,
        required: true,
    },
    ARM:{
        type: String,
        required: true,
    },
    OS:{
        type: String,
        required: true,
    },
    DAA:{
        type: String,
        required:true,
    },
    Biology:{
        type: Number,
        required: true,
    },
    UHV:{
        type: String,
        required: true,
    },
}, 
{timestamps: true}
);

module.exports = new mongoose.model("Student",studentSchema);