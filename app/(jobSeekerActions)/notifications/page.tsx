"use server"
import React from 'react'
import jobSNoti from '@/lib/models/jobSNoti.model'
import { currentUser } from '@clerk/nextjs'
import Noti from '@/components/ui/notifications'

const page = async() => {
  const userInfo=await currentUser()
  const notifications=await jobSNoti.find({jobSeekerId:userInfo?.id})

  return (
    <Noti notifications={notifications} />
  )
}

export default page