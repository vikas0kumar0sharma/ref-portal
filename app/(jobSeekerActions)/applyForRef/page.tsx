"use server"
import React from 'react'
import ApplyForRefSubmit from '@/components/forms/applyForRefSubmit'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const page = async() => {
  const userInfo=await currentUser()
    
  if(!userInfo) redirect('/sign-in')

  const userId=userInfo?.id

  return (
    <div>
        <ApplyForRefSubmit userId={userId}/>
    </div>
  )
}

export default page