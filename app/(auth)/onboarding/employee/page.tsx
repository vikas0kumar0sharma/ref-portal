"use server"
import React from "react";
import EmpSubmit from "@/components/forms/employeeSubmit";
import { currentUser } from "@clerk/nextjs";

export default async function EmployeeSubmit() {
    const userInfo=await currentUser()
    
    const userId=userInfo?.id
    
    const userEmail=userInfo?.emailAddresses[0].emailAddress;

    return (
        <EmpSubmit userId={userId} userEmail={userEmail} />
    );
}

