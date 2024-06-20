import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    JobTitle:{
        type:String,
        required:true
    },
    YOE:{
        type:Number,
        required:true
    },
    LinkedInProf: {
        type: String,
        required: true
    }
})

const Employee=mongoose.models.Employee || mongoose.model('Employee',employeeSchema)

export default Employee