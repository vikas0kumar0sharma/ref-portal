"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const page = () => {

  const router = useRouter()
  const currentPath = usePathname()

  const handleClick = (path: string) => {
    router.push(`${currentPath}${path}`)
  }

  return (
    <div className='flex flex-col items-center justify-content-center gap-20'>
      <div><h1 className='text-3xl'>Please select your category.</h1></div>
      <div className='flex flex-row gap-5'>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={() => handleClick('/employee')}>Employee
        </button>

        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={() => handleClick('/jobseeker')}>Job Seeker
        </button>
      </div>
    </div >
  )
}

export default page