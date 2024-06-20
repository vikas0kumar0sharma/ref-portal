"use server"

import RefReqs from "../models/refReqs.model"
import Employee from "../models/employee.model"
import { connectToDB } from "../mongoose"
import { currentUser } from "@clerk/nextjs"
import jobSNoti from "../models/jobSNoti.model"

export async function fetchReqs(userId: string | any){
    try {
        
        connectToDB()

        const reqs=await RefReqs.find({id:userId})

        return reqs

    } catch (error:any) {
        throw new Error(`Failed to fetch Requests:${error.message}`)
    }
}

export async function fetchReqByCompanyAndPending(company:string | any){
    try {
        connectToDB()

        const reqs=await RefReqs.find({CompanyName:company,Status:"pending"})

        return reqs

    } catch (error:any) {
        throw new Error(`Failed to fetch Requests:${error.message}`)
    }
}

export async function addRefReq(data:any){
    try {
        
        connectToDB()

        await RefReqs.create({
            id:data.id,
            JobLink:data.JobLink,
            JobId:data.JobId,
            CompanyName:data.CompanyName.toUpperCase()
        })

    } catch (error:any) {
        throw new Error(`Failed to create referral request:${error.message}`)
    }
}

export async function acceptRefReq(data:any){
    try {
        
        connectToDB()

        await RefReqs.findOneAndUpdate({JobId:data.JobId,id:data.jobSId},
            {Status:"accepted"}
        )

        const empInfo=await currentUser()
        const empMail=empInfo?.emailAddresses[0].emailAddress
        const emp=await Employee.findOne({email:empMail})
        
        // create notification for jobS
        await jobSNoti.create({
            jobSeekerId:data.jobSId,
            empName:emp.FirstName+" "+emp.LastName,
            empMail:empMail,
            empCompany:emp.CompanyName,
            JobId:data.JobId
        })

    } catch (error:any) {
        throw new Error(error.message)  
    }
}