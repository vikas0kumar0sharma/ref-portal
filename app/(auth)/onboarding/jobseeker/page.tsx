"use server"
import React from "react";
import JobSeekerSubmit from "@/components/forms/jobSeekerSubmit";
import { currentUser } from "@clerk/nextjs";

export default async function EmployeeSubmit() {
    const userInfo=await currentUser()
    
    const userId=userInfo?.id
    
    const userEmail=userInfo?.emailAddresses[0].emailAddress;

    return (
        <JobSeekerSubmit userId={userId} userEmail={userEmail} />
    );
}

