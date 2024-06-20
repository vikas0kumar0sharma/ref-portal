import mongoose from "mongoose";

const jobSNotiSchema=new mongoose.Schema({
    jobSeekerId:{
        type:String,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empMail:{
        type:String,
        required:true
    },
    empCompany:{
        type:String,
        required:true
    },
    JobId:{
        type:String,
        required:true
    }
})

const jobSNoti=mongoose.models.jobSNoti || mongoose.model('jobSNoti',jobSNotiSchema)

export default jobSNoti