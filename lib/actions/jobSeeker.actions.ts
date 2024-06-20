"use server"

import JobSeeker from "../models/jobSeeker.model"
import {connectToDB} from "../mongoose"

export async function fetchJobSeeker(jobSeekerId:string){
    try {
       
        connectToDB();

        const jobSeeker=await JobSeeker.findOne({id:jobSeekerId})

        return jobSeeker
        
    } catch (error:any) {
        throw new Error(`Failed to fetch user:${error.message}`)
    }
}

export async function addJobSeeker(data) {
    try {
        
        connectToDB()

        await JobSeeker.create({
            id:data.id,
            email:data.email,
            FirstName:data.FirstName,
            LastName:data.LastName,
            CollegeName:data.CollegeName,
            CGPA:data.CGPA,
            YOG:data.YOG,
            PhoneNo:data.PhoneNo,
            YOE:data.YOE,
            ResumeLink:data.ResumeLink,
            LinkedInProf:data.LinkedInProf
        })
        
    } catch (error:any) {
        throw new Error(`Failed to create user:${error.message}`)
    }

}