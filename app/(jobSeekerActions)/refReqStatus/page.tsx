"use server"
import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { fetchReqs } from '@/lib/actions/refReqs.actions'
import RefReqStatus from '@/components/ui/refReqStatus'
import { redirect } from 'next/navigation'

const page =async() => {

  const userInfo=await currentUser()

  if(!userInfo) redirect('/sign-in')
    
  const userId=userInfo?.id

  const refReqs=await fetchReqs(userId)

  let reqs:any=[]

  refReqs.forEach((req,idx)=>{
    const item={
      "key":idx,
      "CompanyName":req.CompanyName,
      "JobId":req.JobId,
      "Status":req.Status
    }
    reqs.push(item)
  })

  return (
    <div>
      <RefReqStatus reqs={reqs} />
    </div>
  )
}

export default page