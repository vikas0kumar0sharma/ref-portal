import mongoose from "mongoose";

const refReqsSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    JobLink:{
        type:String,
        required:true
    },
    JobId:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        default:"pending"
    }
})

const RefReqs=mongoose.models.RefReqs || mongoose.model('RefReqs',refReqsSchema)

export default RefReqs