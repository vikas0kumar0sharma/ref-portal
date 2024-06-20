import React from 'react'
import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <SignUp />
    </div>
  )
}

export default page