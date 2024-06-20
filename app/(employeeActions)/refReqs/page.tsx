"use server"

import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { fetchReqByCompanyAndPending } from '@/lib/actions/refReqs.actions'
import { fetchEmployee } from '@/lib/actions/employee.actions'
import { fetchJobSeeker } from '@/lib/actions/jobSeeker.actions'
import RefReq from '@/components/ui/refReq'

const page = async () => {

  const userInfo = await currentUser()
  if (!userInfo) redirect('/sign-in')

  const employee = await fetchEmployee(userInfo.id)

  const reqs = await fetchReqByCompanyAndPending(employee.CompanyName)

  let data = [];
  const jobSdata=[]

  for (const req of reqs) {
    try {
      let jobS = await fetchJobSeeker(req.id)
      const newData = { jobSId: jobS.id, name: jobS.FirstName + " " + jobS.LastName, JobId: req.JobId }
      data.push(newData);
      jobSdata.push(jobS)
    } catch (error) {
      console.error("Error fetching job seeker:", error);
    }
  }

  return (
    <RefReq data={data} jobSdata={jobSdata} />
  )
}

export default page