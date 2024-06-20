"use server"

import jobSNoti from "../models/jobSNoti.model"
import {connectToDB} from "../mongoose"

export async function addJobSNoti(data:any){
    try {
        
        connectToDB()

        await jobSNoti.create({
            jobSeekerId:data.jobSeekerId,
            empName:data.empName,
            empMail:data.empMail,
            empCompany:data.empCompany,
            JobId:data.JobId
        })

    } catch (error:any) {
        throw new Error(`Failed to create notification:${error.message}`)
    }
}

export async function clearJobNoti(jobSeekerId:any,JobId:any){
    try {
        
        connectToDB()

        await jobSNoti.findOneAndDelete({
            jobSeekerId:jobSeekerId,
            JobId:JobId
        })

    } catch (error:any) {
        throw new Error(`Failed to clear notification:${error.message}`)
    }
}