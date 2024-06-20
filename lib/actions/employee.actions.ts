"use server";

import Employee from "../models/employee.model";
import { connectToDB } from "../mongoose";

export async function fetchEmployee(employeeId: string) {
  try {
    connectToDB();

    const employee = await Employee.findOne({ id: employeeId });

    return employee;
  } catch (error: any) {
    throw new Error(`Failed to fetch user:${error.message}`);
  }
}

export async function addEmployee(data: any) {
  try {
    connectToDB();

    await Employee.create({
      id: data.id,
      email: data.email,
      FirstName: data.FirstName,
      LastName: data.LastName,
      CompanyName: data.CompanyName.toUpperCase(),
      JobTitle: data.JobTitle,
      YOE: data.YOE,
      LinkedInProf: data.LinkedInProf,
    });
  } catch (error: any) {
    throw new Error(`Failed to create user:${error.message}`);
  }
}
